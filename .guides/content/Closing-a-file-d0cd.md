To let the system know that you have finished with a file that has been opened, you will need to close it. Doing this signals that it is okay for other programs to use the file now.

Have a look below to see how the code for this is written:

```javascript
14  fs.closeSync(fileDescriptorA)
```

This code also tells the operating system that the file descriptor that was being used is now free to be reused.

The code example below illustrates this process. First, two files are opened:
```javascript
8  var fileDescriptorA= fs.openSync(pathA, 'r')  
9  var fileDescriptorB= fs.openSync(pathB, 'r')
```
Second, the numbers assigned as file descriptors are printed out:
```javascript
11  console.log('File Desc A: '+fileDescriptorA)   
12  console.log('File Desc B: '+fileDescriptorB) 
```
These numbers will be different and should be sequential. (*Note: there is a very tiny possibility that some other process on the system might run after the first file is opened but before the second, which would give a different number. But this is not likely here.*)

{Run the code}(node content/close-file.js)

Remember to close the files at the end of the process. If you don't close files when you finish using them, it could lead to problems with accessing the file later, or the system may run out of file resources.

```javascript
21  fs.closeSync(fileDescriptorB)
22  fs.closeSync(fileDescriptorC)
```

