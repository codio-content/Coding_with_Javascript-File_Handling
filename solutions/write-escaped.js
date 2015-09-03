
// First, create a 2D array
input0 = [ ['one', 1], ['Two', 2], [3,3] ];


// Build a single string
for ( i=0, str=''; i < input0.length; i++ ) {

  for (j=0; j < input0[i].length; j++ ) {
        
    // Just for readability below
    data = input0[i][j]
    
    // isNan() checks if the field can be converted into a number
    if ( isNaN( data ) ) {
      // Not a number, so replace , with |c
      while ( (pos = data.indexOf(','))  != -1 ) {
        data = data.substring(0, pos) + '|c' + data.substring(pos+1)
      }
      thisStr = data
    }
    else {
      // It is a number, so make it a string
      thisStr =  '' + data
    }        
   
    // Add the element to the string
    str += thisStr
    
    // We don't want a ',' at the end of the line
    if ( j != input0[i].length-1 ) {
      str += ','
    }
    
  }
  
  // Write a new line at the end of each row apart form the last
  if ( i != input0.length - 1) {
    str += '\n'
  }
  
}

// Write the string to file
fs = require('fs')
fs.writeFileSync("data.csv", str)
