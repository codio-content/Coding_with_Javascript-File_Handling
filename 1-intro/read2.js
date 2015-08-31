// This creates a special variable for reading files
fs = require('fs')

// Read in the data from our file
data = fs.readFileSync('data.csv').toString()

// Show the data in the console
console.log('RAW DATA AFTER READ')
console.log(data)

// Split our string into rows based on the new line character
rows = data.split('\n')
console.log('INDIVIDUAL RAW ROWS')
console.log(rows)

// Now process the rows array into a 2D array
for ( i=0, cols = []; i<rows.length; i++, cols = [] ) {
  cols = rows[i].split(',')
  rows[i] = cols
}

console.log('FULLY PROCESSED')
console.log(rows)

