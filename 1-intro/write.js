// First, create a 2D array
array = []
rows = 5
cols = 4

for ( i=0; i < rows; i++ ) {
  array[i] = []
  for (j=0; j < cols; j++ ) {
    array[i][j] = i + ':' + j
  }
}
console.log(array)

// Build a single string
for ( i=0, str=''; i < rows; i++ ) {
  for (j=0; j < cols; j++ ) {
    // Add the element to the string
    str += array[i][j]
    // We don't want a ',' at the end of the line
    if ( j != cols-1) {
      str += ','
    }
  }
  // Write a new line at the end of each row
  str += '\n'
}

// Write the string to file
fs = require('fs')
fs.writeFile("write-demo.csv", str)
