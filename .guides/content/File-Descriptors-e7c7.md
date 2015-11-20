Because the handling of files can be different on different systems or types of storage, the programming language provides us with a generic file handling mechanism which abstracts away the details so that we can focus on using the data in the file. 

Most operating systems manage files through a **file descriptor** which controls low level file access. By accessing this **file descriptor** through an abstract interface, we do not have to learn the details of how the operating system manages the file itself, and the interface will remain the same, even if the underlying system is different when our program is run on another system.

For Javascript, we will use a helper library named “fs” to provide an abstract file interface. To access a library, we load the “fs” library using the "require" command. The sample code provided loaded the `fs` library inline 2. (*We will explain all of this sample program as we go.*) 

```javascript
2  var fs= require('fs')  // open file library
```

Now, the “fs” variable can be used to access the file library. Note the way we access the functions by using the `.` operator as in `fs.openSync()` in the example:

```javascript
8  var fileDescriptorA= fs.openSync(pathA, 'r') 
9  var fileDescriptorB= fs.openSync(pathB, 'r')
```

{Run Sample Code}(node content/filedescriptors.js)