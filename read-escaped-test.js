
var test = require('./test-fw.js');

var script = '/home/codio/workspace/challenge1/read-escaped.js';
var inputs = [];
var expected = [
  ['Mary\'s, file','one',22],
  ['Tariq\'s','golden','fleece','2,2']
];

test.test(script, inputs, function(outputs, err) {

  if(err) {
    console.log(err);
    process.exit(1);
  }
  
  if(typeof outputs[0] != 'undefined') {
    outputs = outputs[0];
    
    if(JSON.stringify(expected) == JSON.stringify(outputs)) {
      console.log('Well done!');
      process.exit(0);      
    }
    else {
      console.log('Not quite right please try again.');
      process.exit(1);      
    }
  }
  else {
    console.log('Not quite right please try again.');
    process.exit(1);      
  }
  
});