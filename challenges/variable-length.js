// Load the file system library
fs = require('fs')             

// Get the filepath from the command line
var P= process.argv[2] 
var F= process.argv[3]
var L= process.argv[4]
var B= process.argv[5]

// Your code goes here

var data= fs.readFileSync(P, 'utf8')
var output= ""

// Loop through each line in the data
for(var record in data.split('\n')){
  // the record fields are separated with the '|' character
  var parts= record.split('|')
  firstname= parts[0]
  lastname= parts[1]
  birthday= parts[2]
  
  // Is this the record we are looking for?
  if(firstname == F && lastname= L){
    // This is a match. Output the new brithday in B...
    output= output + firstname + '|' + lastname + '|' + B
  } else {
    // This is not the record we are looking for...
    output= output + firstname + '|' + lastname + '|' + birthday    
  }
}

// Write out the output
writeFileSync(P, output, 'utf8')
