Now you are ready to start learning about how to read file data. JavaScript provides a way to read an entire file at one time and store the contents into a variable. This means you can skip most of the management of file descriptors and all the other complexities of reading files. 

```javascript
var text= fs.readFileSync(filepath, ‘utf8’);
```

{Run Sample Code}(node content/read-text-file.js)

This shortcut will help you to learn the basics of working with files. However, remember that many files will be too large to read into memory all at once and will have to be processed in small amounts at a time. For now you will work with small files that you can load into memory all at once.

