Once we know the format of a file, how to do we load and read it? There are many file formats and reading many of them is beyond the scope of this Unit. But we will learn about some common methods for organizing files.

One simple way to organize files is to establish an exact length for a record, which allows us to know how much data to read and write for each record. 

The sample on the left shows a single containing records that are 6 characters long. The program splits up and prints out each number.

{Run the sample}(node content/parse-fixed-length.js)


### The `String.trim()` Function
----
You might find the `trim()` function helpful. It removes whitespace from the front and end of a string.

```javascript
var text= '  Words   Other   Words\tTab   '
console.log(':' + text + ':')
text= text.trim()
console.log(':' + text + ':')
```
{Run the trim example code}(node content/trim.js)

