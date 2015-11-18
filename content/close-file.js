var fs= require('fs')
var pathA= 'content/textfiles/poem.txt'
var pathB= 'content/textfiles/cheese.txt'
var pathC= 'content/textfiles/fixed-length.txt'

// Open first 2 files (A and B)
var fileDescriptorA= fs.openSync(pathA, 'r')  
var fileDescriptorB= fs.openSync(pathB, 'r')

// show the file descriptor numbers
console.log('File Desc A: '+fileDescriptorA)   
console.log('File Desc B: '+fileDescriptorB) 

// close file descriptor A
fs.closeSync(fileDescriptorA)
console.log('File Desc A ['+fileDescriptorA+'] is freed for reuse.')

// open another file
var fileDescriptorC= fs.openSync(pathC, 'r')
console.log('File Desc C: '+fileDescriptorC)

// close remaining files to clean up
fs.closeSync(fileDescriptorB)                   
fs.closeSync(fileDescriptorC)


