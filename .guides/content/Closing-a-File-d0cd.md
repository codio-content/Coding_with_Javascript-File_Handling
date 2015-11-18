To let the system know we are done with a file that we have opened, we need to close it. This signals that it is okay for other programs to use the file now.

```javascript
14  fs.closeSync(fileDescriptorA)
```

This also tells the operating system that the file descriptor that was being used can be reused.

The code example here illustrates this process. First, two files are opened:
```javascript
8  var fileDescriptorA= fs.openSync(pathA, 'r')  
9  var fileDescriptorB= fs.openSync(pathB, 'r')
```
And the numbers assigned as file descriptors are printed out:
```javascript
11  console.log('File Desc A: '+fileDescriptorA)   
12  console.log('File Desc B: '+fileDescriptorB) 
```
These numbers will be different and should be sequential. (*Note: there is a very tiny possibility that some other process on the system might run after the first file was opened but before the second, which would give a different number. But this is not likely here.*)

{Run the code}(node content/close-file.js)

If we do not close files when we finish using them, there may be problems accessing the file later, or the system may run out of file resources.

```javascript
21  fs.closeSync(fileDescriptorB)
22  fs.closeSync(fileDescriptorC)
```

