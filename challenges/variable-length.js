// Load the file system library
var fs = require('fs')             

// Get the filepath from the command line
var P= process.argv[2] 
var F= process.argv[3]
var L= process.argv[4]
var B= process.argv[5]

// ----------------------------------------------------------------
// 
// Our Helper functions:
// 
// ----------------------------------------------------------------

//
// Loads the file at filepath 
// Returns a 2d array with the data
// 
function load2dArrayFromFile(filepath){
  // Your code goes here:
}

//
// Searches the 2d array 'records' for firstname, lastname.
// Returns the index of the record or -1 if no record exists
// 
function findIndex(records, firstname, lastname){
  // Your code goes here:
}

// Sets the birthday of the record at the given index
// Returns: nothing
function setBirthday(records, index, newBirthday){
  // Your code goes here:
}

// Convert one record into a pipe-delimited string
// Return the pipe-delimited string
function makeLineFromRecord(record){
  // Your code goes here:
}

// Convert the 2d array back into a string
// Return the rull text of the 2d array
function makeTextFrom2dArray(records){
  // Your code goes here:
}

// ----------------------------------------------------------------
// 
//  Our main code body, where we call our functions.
//  
// ----------------------------------------------------------------

// Load our records from the file into a 2d array
var records= load2dArrayFromFile(P)

// Find out which index, if any, has the name we are hunting
var indexWeAreHunting= findIndex(records, F, L)

// Set the birthday record to the one we were passed
setBirthday(records, indexWeAreHunting, B)

// Convert the records into a text string
var output= makeTextFrom2dArray(records)

// Your code goes here
// write the text string out to the file



