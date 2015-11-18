// Open the "fs" library
var fs= require('fs')

// Get the pathname from the command line
var pathname= 'content/textfiles/poem.txt'

// Flags tell the library what kind of access we need
var flags= "r" // read only

// Opens a file named “pathname”
// Returns a file descriptor we will 
// use to access the file until we are done with it.
var fd= fs.openSync(pathname, flags)

// Note that the file descriptor (fd) is an integer
// when we print it out.
console.log("File Descriptor: " + fd)

