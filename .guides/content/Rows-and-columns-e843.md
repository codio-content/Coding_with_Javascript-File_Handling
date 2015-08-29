Here is our table of data we used in the 2D arrays Unit.


| | C0 | C1 | C2 | C3
|-|-|-|-|-|
|R0| 'Alice' | 23 | 'Blue' | 'Audi' |
|R1| 'Tariq' | 18 | 'Red' | 'Mini' |
|R2| 'Bob' | 31 | 'Green' | 'Renault' |

This is represented in our program as an array like this 

```javascript
people = [ ['Name', 'Age', 'Color', 'Car'], ['Alice',23,'Blue','Audi'],
['Tariq',18,'Red','Mini'], ['Bob',31,'Green','Renault'] ]
```

## Persisting our data
But what happens when our program stops running and we want to store the data so that when we restart our program, the data *persists* and is there ready again when we need it?

