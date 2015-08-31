The code on the left shows how we write data to a file.

{Run the code}(/home/codio/workspace/write.sh)

## Creating some data to start with
The top section of code shows some data being created. You should be able to see how a string in the format `X:Y` is created for each row/column combination.

## Preparing the output data
In the next section of code, we prepare a single string that contains the CSV formatted data with a new line at the end of each row.

This is not an efficient way of writing data and later we will show better ways of doing this. For now, though, it is good enough.

## Writing the stirng to file
Finally, we write our string `str` to the file `write-demo.csv`. 

To see this, click on the `write-demo.csv` file tab next to the `write.js` code tab in top of the left pane.

