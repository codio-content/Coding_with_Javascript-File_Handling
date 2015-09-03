
var fs = require('fs');

var test = require('./test-fw.js');

var script = '/home/codio/workspace/challenge2/write-escaped.js';
var inputs = [[ ['one', 1], ['Two', 2], [3,3] ]];
var expected = 'one,1\nTwo,2\n3,3'

test.test(script, inputs, function(outputs, err) {

  if(err) {
    console.log(err);
    process.exit(1);
  }
  
  try {
    var data = fs.readFileSync('/home/codio/workspace/challenge2/data.csv', 'UTF8');

//     console.log(data);
  

    if(data == expected) {
      console.log('Well done!');
      process.exit(0);      
    }
  }
  catch(e) {
  }

  console.log('Not quite right please try again.');
  process.exit(1);   

});