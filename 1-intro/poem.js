// This creates a special variable for reading files
fs = require('fs')

// Read in the data from our file
data = fs.readFileSync('./1-intro/poem.txt').toString()

// Display it in the console
console.log(data)

