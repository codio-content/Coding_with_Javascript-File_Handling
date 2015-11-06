
// Example of opening a file and then closing it
var fs= require('fs')               // open the file system library
var path1= process.argv[2]          // the pathname to some file
var path2= process.argv[3]          // the pathname to some file
var path3= process.argv[4]          // the pathname to some file

// Open first 2 files
console.log('Opening first file')
var fd1= fs.openSync(path1, 'r')    // get file descriptor 1
console.log('File Desc 1: '+fd1)    // print the fd number

console.log('Opening Second File')
var fd2= fs.openSync(path2, 'r')    // get file descriptor 2
console.log('File Desc 2: '+fd2)    // print the fd number

// Close one, to show that file descriptors are reused
// when we open the next file.
console.log('Closing First File')
fs.closeSync(fd1)                   // close file 1, freeing fd1

console.log('fd ['+fd1+'] is now free for reuse.')

console.log('Opening Third File')
var fd3= fs.openSync(path3, 'r')    // get file descriptor 3
console.log('File Desc 3: '+fd3)    // print the fd number

console.log('Closing remaining files.')
fs.closeSync(fd2)                   // close the file by descriptor
fs.closeSync(fd3)                   // close the file by descriptor


