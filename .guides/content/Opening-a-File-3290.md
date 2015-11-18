Most systems have more than one program running at a time. In order to ensure that multiple programs do not “run into each other” while attempting to use a single file, a program must “open” the file first. This allows the system to restrict access to this file.

```javascript
8  var fileDescriptorA= fs.openSync(pathA, 'r')   // open file A
9  var fileDescriptorB= fs.openSync(pathB, 'r')   // open file B
```

{Run the code}(node content/textfiles/filedescriptors.js)

We hang on to the file descriptor `fd` so that we can use it later. The file descriptor can be used to read from the file, write to the file, and eventually close the file when we are done with it.

The arguments to the `openSync` function include the path to the file (which includes the filename) and the `flags` used to open the file. The flags tell the operating system if we are opening the file in order to write to it or just to read what is already there. We will learn more about this later.