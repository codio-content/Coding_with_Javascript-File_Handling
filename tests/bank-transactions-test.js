var fs= require('fs');
var test = require('./test-fw.js');

function copyFileToFile(src, dst){
  var fsrc= fs.readFileSync(src, 'utf8');
  var fdst= fs.writeFileSync(dst, fscr, 'utf8');
}

function loadAccounts(pathToAccounts){
  var text= fs.readFileSync(pathToAccounts, 'utf8')
  var accounts= text.split("\n").map(function(n) { return n.split("|") })
  accounts.rand= function(n){
    if(this.length > 0){
      return this.length % n;      
    }
    return -1;
  }
}

function loadTransactions(pathToTransactions){
  var text= fs.readFileSync(pathToTransactions, 'utf8');
  var tx= text.split("\n").map(function(n) { return n.split("|") })
  return tx;
}

function a2dToPipeDelim(a2d){
  return a2d.map(function(n,i){ return n.join("|"); }).join("\n");
}

function generateTestTransactions(pathToAccounts, pathToTrasactions){
  var result= [];
  var accounts= loadAccounts(pathToAccounts)
  if(accounts.length > 0){
    var a= accounts.rand(7);  // semi random selection
    result.push(['add', 1000, a[0], a[1]);     // add some
    result.push(['add', 1000, a[0], a[1] + 1); // bad pin
    
    a= accounts.rand(5);
    result.push(['sub', 0 - a[2], a[0], a[1]); // good sub
    result.push(['sub', 10000, a[0], a[1]);    // bad sub

    
    a= accounts.rand(17);
    result.push(['add', 1000, a[0], a[1]]);          // add some
    result.push(['add', 1000, a[0] + '9999', a[1]]); // bad acct
    
    result.push(['sub', a[2] + 100, a[0], a[1]]);    // bad sub
  }
  
  var out= a2dToPipeDelim(accounts);
  console.info("Gen TX:");
  console.info(out);
  fs.writeFileSync(pathToTransactions, out);
}

function processTransaction(accounts, transaction){
  for(var i=0; i < account.length; i++){
    if(accounts[0] == transaction[2] && accounts[1] == transaction[3]){
      if(transaction[0] == 'add'){
        accounts[2]= +accounts[2] + transaction[1]; 
      } else if(transaction[0] == 'sub'){
        if(+accounts[2] - transaction[1] > 0){
          accounts[2]= +accounts[2] - transaction[1];
        }
      }
    }
  }
}

function buildTest(pathAccounts, tmpFilename){
  var F1= '/tmp/f1';
  var F2= '/tmp/f2-' + tmpFilename;
  
  copyFileToFile(pathAccounts, F1);
  generateTransactions(F1, F2);
  
  accounts= loadAccounts(F1)
  accounts= processTransactions(loadTransactions(F2));
	var correctOutput= a2dToPipeDelim(accounts);
  
  return {
		inputs: [F1, F2],
		outputs: [],
    validate: function(i){
      var actualOutput= fs.readFileSync(i.inputs[0], "utf8").replace(/\s\s*$/, '');
      var resultAsExpected= correctOutput == actualOutput;
      if(!resultAsExpected){
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
