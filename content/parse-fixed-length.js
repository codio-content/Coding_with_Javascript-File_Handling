
// sample data with records 6 characters long
var data= '   100  1000     1999999   700'
console.log(data)

var recordLength= 6
var start= 0
var records= []

// use the substring function to read all the records
while( (data.length - start) >= recordLength) {
  record= data.substring(start, start + recordLength)
  records.push(+record)
  start+= recordLength
}

// print out all of our records
for(var i=0; i < records.length; i++) {
  console.log('Record '+i+': ('+records[i]+')')
}
