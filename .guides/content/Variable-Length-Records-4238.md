Another way to store data is called a *variable length record*. Instead of using a set amount of space for fields and records, it stores only what is needed. This saves space and allows for storing much longer records, though it is slightly more complex to read.

Field Delimited Data
----
Since we do not use the “|” (pipe) character in normal sentences, it is a commonly used character to delimit fields in a variable length record. These are called “pipe delimited” files are they have the constraint that no pipe characters can occur in the data. Usually each record is one line long (newline delimited) and each field is separated by a pipe character.



Hints:
----
### Use Functions of Your Own
Working with files and records is a great time to use functions. The example program provided in the challenge has **stubs** (empty functions) for you to fill out to help.


### Array.join()
There is a function named `join()` that will convert an array of strings into a single string with a delimiter between the parts.

```javascript
list= ['a', 'b', 'c']
delimiter= ':'
console.log(list.join(delimiter))
```
{Run the join sample}(node content/join.js)

### The String.split() function
There is another function called `split()` that you may find will help you. 

```javascript
text= 'a:b:c:d'
delimiter= ':'
list= text.split(delimiter)
console.log(list)
```
{Run the split sample}(node content/split.js)

Sample Program:
----
Now look at the sample provided that manages a simple pipe delimited string. It uses functions in the program. It also uses the `split()` function to convert pipe delimited strings into lists:
```javascript
6  function getListFromPipeDelimitedText(pipeDelimitedText) {
7    var recordList= pipeDelimitedText.split('|')
8    return recordList
9  }
```
It also uses the `join()` function to convert lists into pipe delimited strings:
```javascript
12  function getPipeDelimitedTextFromList(recordList){
13    return recordList.join('|')
14  }
```

{Run the Pipe Sample}(node content/pipe-split.js)

These should help you with the next challenge.
