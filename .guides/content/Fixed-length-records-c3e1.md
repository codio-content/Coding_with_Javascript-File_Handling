Once the format of a file is known, how can it be loaded and read? In this section, you will learn about some of the most common methods for organising files.

One simple way to organise files is to establish an exact length for a record. This allows you to know how much data to read and write for each record. 

The sample on the left shows a single line containing records that are 6 characters long. The program splits up and prints out each number.

{Run the sample}(node content/parse-fixed-length.js)


### The `String.trim()` function
----
You might find the `trim()` function helpful. It removes white space (gaps) from the beginning and end of a string.

```javascript
var text= '  Words   Other   Words\tTab   '
console.log(':' + text + ':')
text= text.trim()
console.log(':' + text + ':')
```
{Run the trim example code}(node content/trim.js)

