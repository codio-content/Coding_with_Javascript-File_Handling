The way files are handled can be different depending on the system and type of storage used. However, JavaScript provides a generic file handling mechanism which removes the unwanted details (this is also known as abstraction in computing). This allows you to focus on using the data in the file. 

Most operating systems manage files through a **file descriptor** which controls low level file access. By accessing the **file descriptor** through an abstract interface, you do not have to learn the details of how the operating system manages the file itself, and the interface will remain the same, even if the underlying system is different when the program is run on another system.

In JavaScript, you will use a helper library named “fs” to provide an abstract file interface. To load the “fs” library, you use the "require" command. The sample code on the left loads the `fs` library in line 2. (*All of this sample program will be explained as you work through the unit.*) 

```javascript
2  var fs= require('fs')  // open file library
```

Once the `fs` library has been loaded, the “fs” variable can be used to access the file library. Note that you can access the functions by using the `.` operator, this is shown in `fs.openSync()` in the example:

```javascript
8  var fileDescriptorA= fs.openSync(pathA, 'r') 
9  var fileDescriptorB= fs.openSync(pathB, 'r')
```

{Run Sample Code}(node content/filedescriptors.js)