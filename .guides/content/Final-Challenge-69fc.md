For your final challenge of this Unit, we will load two files. The first file **( F1 )** will have information about some accounts. It will be pipe-delimited and have one record per line, with these fields:

`ACCOUNT NUMBER | PIN CODE | BALANCE`

The second file **( F2 )** will contain instructions: one on each line. The instructions will look like this:

`COMMAND | AMOUNT | ACCOUNT NUMBER | PIN CODE`

Command will be either `add` or `sub`. If the command is `add`, you will add `AMOUNNT` to the customer total in the account files **( F1 )**. If the command is `sub`, you will subtract. 

However, there are a number of reasons that you may need to reject the transation. If you are asked to subtract an amount that would put the account below zero or if the pin code you are provided does not match the pin code in the account record, the transaction is ignored.

{Check It!|assessment}(test-1690867941)

|||guidance
### Solution
```javascript

```
|||