We are now ready to start reading file data. Javascript provides a way to read an entire file at one time and store the contents into a variable. This allows us to skip most of the management of file descriptors and all the other complexities of reading files. 

```javascript
var text= fs.readFileSync(filepath, ‘utf8’);
```

{Run Sample Code}(node content/read-text-file.js)

While this shortcut will help us learn the basics of working with files, remember that many files will be too large to read into memory all at once and will have to be processed in small amounts at a time. But for now we will work with small files that we can load into memory all at once. We will return to file descriptors in a later lesson.

