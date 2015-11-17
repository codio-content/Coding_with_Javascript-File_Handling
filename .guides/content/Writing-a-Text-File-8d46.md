We can write the contents of a variable out to a file all at once like this:

```javascript
// load the library
fs = require('fs')                     
// get the path to the file
var path= process.argv[2]      
// something to write out
var text= "Some text"       

// write contents of ‘text’
// - to the file ‘path’
// - using UTF-8 encoding
fs.writeFileSync(path, text, ‘utf8’);                  
```

{Check It!|assessment}(test-808628205)

|||guidance
### Solution
```javascript
// Load the file system library
fs = require('fs')             

// Get the filepath from the command line
var I= process.argv[2] 
var O= process.argv[3] 
var S= process.argv[4]
var T= process.argv[5]

// Your code goes here

// Load the data from the input path
var filedata= fs.readFileSync(I, 'utf8', 'r')

// Create a variable to hold our output while we build it
var output= ""

// Find the first occurance of S
var positionS= filedata.indexOf(S)

// If positionS is -1, we are done.
while(positionS >= 0) {
  output+= filedata.substring(0, positionS) + T
  filedata= filedata.substring(positionS + S.length)
  positionS= filedata.indexOf(S)
}
output+= filedata

// Write out the contents.
fs.writeFileSync(O, output, 'utf8')
```
|||