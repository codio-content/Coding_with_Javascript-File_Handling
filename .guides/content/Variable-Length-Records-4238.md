Another way to store data is called a *variable length record*. Instead of using a set amount of space for fields and records, it stores only what is needed. This saves space and allows for storing much longer records.

Field Delimited Data
Since we do not use the “|” (pipe) character in normal sentences, it is a commonly used character to delimit fields in a variable length record. These are called “pipe delimited” files are they have the constraint that no pipe characters can occur in the data. Usually each record is one line long (newline delimited) and each field is separated by a pipe character.

Challenge: read a 2d array from a pipe delimited file, operate on the arrays, and write the file back out. 


{Run the code}(/home/codio/workspace/ch-read.sh)

{Check It!|assessment}(test-3353555413)


|||guidance
### Solution
```javascript

// This creates a special variable for reading files
fs = require('fs')

// Read in the data from our file
data = fs.readFileSync('data.csv').toString()

// Split our string into rows based on the new line character
rows = data.split('\n')

// Now process the rows array
for ( i=0, cols = []; i<rows.length; i++, cols = [] ) {
  
  // Split the current row, which is a single line from the file
  cols = rows[i].split(',')
  
  // Now replace the '|c' with ','
  for ( j=0; j<cols.length; j++) {
    if ( isNaN( cols[j]) ) {
      cols[j] = cols[j].replace('|c', ',')
    }
    else {
      cols[j] = parseFloat(cols[j])
    }
  }
  rows[i] = cols
}

output(rows)
```
|||