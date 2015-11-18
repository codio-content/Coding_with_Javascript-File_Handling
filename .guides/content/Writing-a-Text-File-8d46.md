We can write the contents of a variable out to a file all at once like this:

```javascript
11  fs.writeFileSync(filepath, text, ‘utf8’);
```

This command will cause the `fs` library to write out the contents of the variable `text` to the file in the path contained in `filepath`.

{Run the Sample Code}(node content/write-text-file.js)

Notice that we are printing the contents of the same file two times, but we changed the contents in between.