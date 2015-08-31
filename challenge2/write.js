// First, create a 2D array
input0 = [ ['Mary had a little lamb', 24], ['This\, that and the other', 14] ]

// Build a single string
for ( i=0, str=''; i < input0.length; i++ ) {
  for (j=0, thisStr=''; j < input0[i].length; j++ ) {
    
    // Just for readability below
    data = input0[i][j]
    
    // isNan() checks if the field can be converted into a number
    if ( isNaN( data ) ) {
      // Not a number, so replace |c with ,
      while ( (pos = data.indexOf('|c'))  != -1 ) {
        thisStr = str.substring(0, pos) + ',' + thisStr.substring(pos+2)
      }
    }
    else {
      // It is a number, so make it a string
      thisStr =  '' + data
    }        
    
    // Add the element to the string
    str += thisStr
    
    // We don't want a ',' at the end of the line
    if ( j != i-1) {
      str += ','
    }
    
  }
  
  // Write a new line at the end of each row
  str += '\n'
  
}

// Write the string to file
fs = require('fs')
fs.writeFile("data.csv", str)
