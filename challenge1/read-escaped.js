console.log('hello')
// This creates a special variable for reading files
fs = require('fs')

// Read in the data from our file
data = fs.readFileSync('data.csv').toString()

// Split our string into rows based on the new line character
rows = data.split('\n')

// Now process the rows array
for ( i=0, cols = []; i<rows.length; i++, cols = [] ) {
  cols = rows[i].split(',')
  
  // Now replace the '\c' with ','
  for ( j=0; j<cols.length; j++) {
    if ( isNaN( cols[j]) ) {
      cols[j].replace('\c', ',')
    }
    else {
      cols[j] = parseFloat(cols[j])
    }
  }
    
  rows[i] = cols
    
}

output(rows)
