
var fs= require('fs')                          // open file library

var pathA= 'content/textfiles/poem.txt'
var pathB= 'content/textfiles/cheese.txt'
var pathC= 'content/textfiles/empty.txt'

var fileDescriptorA= fs.openSync(pathA, 'r')   // open file A
var fileDescriptorB= fs.openSync(pathB, 'r')   // open file B

console.log('File Desc A: '+fileDescriptorA)   // print file desc A   
console.log('File Desc B: '+fileDescriptorB)   // print file decs B

fs.closeSync(fileDescriptorA)                  // close file desc A
console.log('Closed A ['+fileDescriptorA+']')

var fileDescriptorC= fs.openSync(pathC, 'r')   // open file C

console.log('File Desc C: '+fileDescriptorC)   // print file desc C

fs.closeSync(fileDescriptorB)                  // close file desc B                   
fs.closeSync(fileDescriptorC)                  // close file desc C


