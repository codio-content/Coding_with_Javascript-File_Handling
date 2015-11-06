We are now ready to start reading file data. Javascript provides a way to read an entire file at one time and store the contents into a variable. This allows us to skip most of the management of file descriptors and all the other complexities of reading files. 

```javascript
var text= fs.readFileSync(filepath, ‘utf8’);
// text now contains the entire content of the file
```

While this shortcut will help us learn the basics of working with files, remember that many files will be too large to read into memory all at once and will have to be processed in small amounts at a time. But for now we will work with small files that we can load into memory all at once. We will return to file descriptors in a later lesson.


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