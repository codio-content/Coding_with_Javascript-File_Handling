Having this sort of data in a single string is not much use, however. 

We need to *parse* it into a proper Javascript array. Parse means *to split up data based on some rules*.

{Run the code}(/home/codio/workspace/read2.sh)

## Making use of array.split()

Here's a reminder of our file data.

```javascript
Alice,23,Blue,Audi
Tariq,18,Red,Mini
Bob,31,Green,Renault
```

### Rows
We now see a really useful application of the `array.split()` function. 

    array = data.split('\n')

We split the data up into individual row arrays based on the `\n` new line character. Remember that the `\` character is an escape symbol and `\n` is the special escape sequence meaning the new line character.

We will then end up with the following data in our program.

```javascript
rows[0] = 'Alice,23,Blue,Audi'
rows[1] = 'Tariq,18,Red,Mini'
rows[2] = 'Bob,31,Green,Renault'
```

### Columns (fields)
We're not quite there yet, as we need to get our fields split up into array elements as well.

In the loop initialization, we create a new, empty array to hold our final data using `cols = []`.

We then loop through the initial rows array and split each row up into a new array. We then assign the new `cols` array to the current row element.

