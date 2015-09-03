
// This creates a special variable for reading files
fs = require('fs')

// Read in the data from our file
data = fs.readFileSync('data.csv').toString()

// Show the data in the console
output(data)
