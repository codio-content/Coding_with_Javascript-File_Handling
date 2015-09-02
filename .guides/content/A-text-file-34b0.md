One of the simpler file types is a simple text file.

The file on the bottom left shows the first verse of a poem. This is very easily read into a string variable.

## Reading it in
The code on the top left shows how we can read in the `poem.txt` file and display it to the console.

{Run the code}(node run-user.js ./1-intro/poem.js)

Once read in, the entire poem now lives in the `data` string variable. 

If you run the code you will see it appearing on 4 lines. This is because the new line characters in the files are carried across into the variable and these characters show as actual new lines in the console.