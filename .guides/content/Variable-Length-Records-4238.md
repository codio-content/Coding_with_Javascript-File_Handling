Another way to store data is called a *variable length record*. Instead of using a set amount of space for fields and records, it stores only what is needed. This saves space and allows for storing much longer records.

Field Delimited Data
Since we do not use the “|” (pipe) character in normal sentences, it is a commonly used character to delimit fields in a variable length record. These are called “pipe delimited” files are they have the constraint that no pipe characters can occur in the data. Usually each record is one line long (newline delimited) and each field is separated by a pipe character.

Challenge: read a 2d array from a pipe delimited file, operate on the arrays, and write the file back out. 

{Check It!|assessment}(test-2358046206)


|||guidance
### Solution
```javascript

// This creates a special variable for reading files
fs = require('fs')


```
|||