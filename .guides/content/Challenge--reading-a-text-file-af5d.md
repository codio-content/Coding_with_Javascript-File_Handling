
{Check It!|assessment}(test-3353555413)

|||guidance
### Solution
```javascript
// Load the fs library.
var fs = require('fs')

// Load our command line arguments
var P= process.argv[2]
var S= process.argv[3]

// Read in the data from our file
var data = fs.readFileSync(P, 'utf8')

// Run through the file data, counting S.
// We will use the indexOf function to assist us.
var counter= 0
var nextIndex= data.indexOf(S)
while(nextIndex >= 0) {
  counter= counter + 1
  data= data.substring(nextIndex + S.length)
  nextIndex= data.indexOf(S)
}

console.log(counter)
```
|||