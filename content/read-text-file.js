// Load the fs library.
var fs = require('fs')

// the filepath we will be using
var P= 'content/textfiles/parrot.txt'

// Read in the data from our file
var data = fs.readFileSync(P, 'utf8')

// Print out the contents to review
console.log(data)
