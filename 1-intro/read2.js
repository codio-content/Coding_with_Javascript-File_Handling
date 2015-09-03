
// This creates a special variable for reading files
fs = require('fs')

// Read in the data from our file
data = fs.readFileSync('data.csv').toString()

// Show the data in the console
output('RAW DATA AFTER READ')
output(data)

// Split our string into rows based on the new line character
rows = data.split('\n')
output('INDIVIDUAL RAW ROWS')
output(rows)

// Now process the rows array into a 2D array
for ( i=0, cols = []; i<rows.length; i++, cols = [] ) {
  cols = rows[i].split(',')
  rows[i] = cols
}

output('FULLY PROCESSED')
output(rows)
