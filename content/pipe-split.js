// ----------------------------------------------------------------
// My Pipe Delimited String Functions 
// ----------------------------------------------------------------

// function returns a list from a pipe dlimited string
function getListFromPipeDelimitedText(pipeDelimitedText) {
  var recordList= pipeDelimitedText.split('|')
  return recordList
}

// function returns a pipe delimited string from a list
function getPipeDelimitedTextFromList(recordList){
  return recordList.join('|')
}

// function which will print out all of our records
function printRecords(recordList){
  for(var i=0; i < records.length; i++) {
    console.log('Record '+i+': ('+records[i]+')')
  }
}

// ----------------------------------------------------------------
// Main Section
// ----------------------------------------------------------------
var data= '100|1000|1|999999|700'                // sample data
console.log(data)                                // print data

var records= getListFromPipeDelimitedText(data)  // create records
printRecords(records)                            // and print them

var data2= getPipeDelimitedTextFromList(records) // make a string
console.log(data2)                               // print it
