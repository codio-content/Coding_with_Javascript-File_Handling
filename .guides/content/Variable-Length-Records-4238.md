Another way to store data is called a *variable length record*. Instead of using a set amount of space for fields and records, it stores only what is needed. This saves space and allows for storing much longer records.

Field Delimited Data
Since we do not use the “|” (pipe) character in normal sentences, it is a commonly used character to delimit fields in a variable length record. These are called “pipe delimited” files are they have the constraint that no pipe characters can occur in the data. Usually each record is one line long (newline delimited) and each field is separated by a pipe character.

Challenge: read a 2d array from a pipe delimited file, operate on the arrays, and write the file back out. 

{Check It!|assessment}(test-2358046206)


|||guidance
### Solution
```javascript
// Load the file system library
var fs = require('fs')             

// Get the filepath from the command line
var P= process.argv[2] 
var F= process.argv[3]
var L= process.argv[4]
var B= process.argv[5]

// Your code goes here

var data= fs.readFileSync(P, 'utf8')
var output= ""

// Loop through each line in the data
var records= data.split('\n')

for(var i=0; i < records.length; i++){
  var record= records[i]
  //console.info("RECORD")
  //console.info(record)
  
  // the record fields are separated with the '|' character
  var parts= record.split('|')
  var firstname= parts[0]
  var lastname= parts[1]
  var birthday= parts[2]
  //console.info(parts.join(':'))
  
  output= output + firstname + '|' + lastname + '|'
    
  // Is this the record we are looking for?
  if(firstname == F && lastname == L){
    // This is a match. Output the new brithday in B...
    output= output + B
  } else {
    // This is not the record we are looking for...
    output= output + birthday
  }
  
  output= output + '\n'
}

// Write out the output
fs.writeFileSync(P, output, 'utf8')

```
|||