// Load the file system library
var fs = require('fs')             

// Get the filepath from the command line
var F1= process.argv[2] 
var F2= process.argv[3]

// Your code goes here

//
// Create a function that turns pipe-delimited strings 
// into 2d arrays
// 
function pipe2a(text){
  var records= text.split("\n")
  for(var i=0; i < records.length; i++){
    records[i]= records[i].split("|")
  }
  return records
}

//
// Create a function that turns 2d arrays into 
// pipe-delimited strings.
// 
function a2pipe(a){
  var text= ""
  for(var i=0; i < a.length; i++){
    var record= a[i]
    text+= record.join("|") + "\n"
  }
  return text;
}

//
// Run a single tranasaction
// 
function runTransaction(accounts, transaction){
  for(var i=0; i < accounts; i++){
    var account= accounts[i]
    if(account[0] == transaction[2]){    // is this the correct account?
      if(account[1] == transaction[2]){  // is the pin code correct?
        
        // make sure the amounts are treated as floating point numbers
        var balance= parseFloat(accounts[2])
        var change= parseFloat(transaction[1])
        var command= transaction[0]
        
        // which action are we performing?
        if(command == 'add'){
          accounts[i][2]= balance + change
        } else if(command == 'sub') {
          if(change <= balance) {
            accounts[i][2]= balance - change
          }
        }
      } else {
        // wrong pin code     
      }
    }
  }
  return accounts
}

var accounts= pipe2a(fs.readFileSync(F1, 'utf8'))
var transactions= pipe2a(fs.readFileSync(F2, 'utf8'))

// for each transaction
for(var i=0; i < transactions.length; i++){
  var transaction= transactions[i]
  // look for the matching account
  var accountFound= false;
  for(var j=0; !accountFound && j < accounts.length; j++){
    var account= accounts[i]
    if(account[0] == transaction[2]){
      accountFound= true;
      if(account[1] == transaction[3]){
        balance= parseFloat(account[2])
        change= parseFloat(transaction[1])
        if(transaction[0] == 'add'){
          accounts[i][2]= balance + change 
        } else if (transaction[0] == 'sub' && change <= balance){
          accounts[i][2]= balance - change           
        }
      }
    }
  }
}

fs.writeFileSync(F1, a2pipe(accounts), 'utf8')

