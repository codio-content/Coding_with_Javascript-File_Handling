Once we know the format of a file, how to do we load and read it? There are many file formats and reading many of them is beyond the scope of this lesson. But we will learn about some common methods for organizing files.

One simple way to organize files is to establish an exact length for a record, which allows us to know how much data to read and write for each record. For example, our format might specify 16 characters for first name, 16 for a last name, and 8 for a birthday in MMDDYYYY order. 

Our file would look like this:

`Adam____________Smith___________11111985`
`Theodore________Anderson________03201990`
`Monty___________Biscuit-Barrel__10181980`

*Note that there are no newline characters at the end of the records. It is split up here so we can read it.*

{Check It!|assessment}(test-1456892332)

