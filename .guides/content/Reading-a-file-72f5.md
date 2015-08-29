If NodeJS, the version of Javascript that runs on the server, we have special ways of reading from a file.

Take a look at the code on the left.

{Run the code}(/home/codio/workspace/read.sh)

## Creating a special object variable for file handling
At the top of our example is a special command that tells NodeJS to create a variable fo handling files. Don't worry about what this does for now. Just include this at the top of your code.

For those interested, it is telling us to create an *object variable* that is created from the 'fs' (file system) module.

## Reading the data
```javascript
data = fs.readFileSync('data.csv').toString()
```

This loads the entire contents of a file called `data.csv`, converts it into a string and loads it into a variable `data`.

