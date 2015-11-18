// load the library
fs = require('fs') 

// get the path to the file
var filepath= '/tmp/out.txt'

// something to write out
var text= "A newt?"

// write ‘text’, to the file at ‘filepath’, using UTF-8 encoding
fs.writeFileSync(filepath, text, 'utf8');

// print out the contents of the file
console.log(fs.readFileSync(filepath,'utf8'))

// write something else out to the same file
fs.writeFileSync(filepath, 'I got better.', 'utf8');

// print out the contents of the file again
console.log(fs.readFileSync(filepath,'utf8'))