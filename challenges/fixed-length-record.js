// Load the file system library
fs = require('fs')             

// Get the filepath from the command line
var P= process.argv[2] 
var F= process.argv[3]
var F= process.argv[4]
var B= process.argv[5]

// Your code goes here
var data= fs.readFileSync(P, 'utf8')

