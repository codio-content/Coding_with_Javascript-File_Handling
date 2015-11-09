var fs= require('fs');
var test = require('./test-fw.js');

function copyFileToFile(src, dst){
  fs.writeFileSync(dst, fs.readFileSync(src, 'utf8'), 'utf8');
}

function loadAccounts(pathToAccounts){
  var text= fs.readFileSync(pathToAccounts, 'utf8')
  var accounts= text.split("\n").map(function(n){ return n.split("|"); });
  return accounts;
}

function loadTransactions(pathToTransactions){
  var text= fs.readFileSync(pathToTransactions, 'utf8');
  var tx= text.split("\n").map(function(n) { return n.split("|") })
  return tx;
}

function a2dToPipeDelim(a2d){
  return a2d.map(function(n,i){ return n.join("|"); }).join("\n");
}

function generateTestTransactions(pathToAccounts, pathToTransactions){
  var result= [];
  var accounts= loadAccounts(pathToAccounts);
  if(accounts.length > 0){
    var a= accounts[7 % accounts.length];        // semi random selection
    result.push(['add', 1000, a[0], a[1]]);      // add some
    result.push(['add', 1000, a[0], +a[1] + 1]); // bad pin
    
    a= accounts[5 % accounts.length];            // semi random selection
    result.push(['sub', a[2], a[0], a[1]]);      // good sub
    result.push(['sub', 10000, a[0], a[1]]);     // bad sub

    a= accounts[17 % accounts.length];               // semi random selection
    result.push(['add', 1000, a[0], a[1]]);          // add some
    result.push(['add', 1000, a[0] + '9999', a[1]]); // bad acct
    
    result.push(['sub', a[2] + 100, a[0], a[1]]);    // bad sub
  }
  
  var out= a2dToPipeDelim(result);
  //console.info("Gen TX:");
  //console.info(out);
  //console.info("--------");
  
  fs.writeFileSync(pathToTransactions, out, 'utf8');
}

function processTransaction(accounts, transaction){
  for(var i=0; i < accounts.length; i++){
    if(accounts[i][0] == transaction[2] && accounts[i][1] == transaction[3]){
      //console.info(["TX", accounts[i], transaction])
      if(transaction[0] == 'add'){
        accounts[i][2]= +accounts[i][2] + +transaction[1];
      } else if(transaction[0] == 'sub'){
        if(+accounts[i][2] - +transaction[1] >= 0){
          accounts[i][2]= +accounts[i][2] - +transaction[1];
        }
      } else {
        //console.info("BAD ARG");
      }
      //console.info(["POST", accounts[i]])
    }
  }
  return accounts;
}

function processTransactions(accounts, transactions){
  for(var i=0; i < transactions.length; i++){
    accounts= processTransaction(accounts, transactions[i]);
  }
  return accounts;
}

function buildTest(pathAccounts, tmpFilename){
  var F1= '/tmp/f1';
  var F2= '/tmp/f2-' + tmpFilename;
  
  copyFileToFile(pathAccounts, F1);
  generateTestTransactions(F1, F2);
  
  var accounts= processTransactions(loadAccounts(F1), loadTransactions(F2));
	var correctOutput= a2dToPipeDelim(accounts);
  
  return {
		inputs: [F1, F2],
		outputs: [],
    validate: function(i){
      var actualOutput= fs.readFileSync(i.inputs[0], "utf8").replace(/\s\s*$/, '');
      var resultAsExpected= correctOutput == actualOutput;
      if(true || !resultAsExpected){
        console.info("ACTUAL\n" + actualOutput)
        console.info("CORRECT\n" + correctOutput)
        console.info("LOCAL: " + actualOutput.localeCompare(correctOutput))
      }
      return resultAsExpected;
		}
	}
}

var script = 'challenges/bank-transactions.js';

var cpath= 'content/textfiles';

test.tests(script, [
	buildTest(cpath+'/accounts.txt', 'tx1'),
	buildTest(cpath+'/accounts.txt', 'tx2'),
	buildTest(cpath+'/accounts.txt', 'tx3')
]);
