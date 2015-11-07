var fs= require('fs');
var test = require('./test-fw.js');

function buildTest(pathi, patho, firstname, lastname, bday){
  var safeOutputPath= '/tmp/' + patho.replace(/\W/g, '')
  
  var startingData= fs.readFileSync(pathi, 'utf8')
  fs.writeFileSync(safeOutputPath, startingData, 'utf8')
  
  var re= new RegExp(firstname+'|'+lastname+'|'+"........")
	var correctOutput= startingData.replace(re, firstname+'|'+lastname+'|'+bday)
  
	return {
		inputs: [safeOutputPath, firstname, lastname, bday],
		outputs: [],
    validate: function(i){
      //console.info("VAL: " + i.inputs[0])
      //console.info(i)
      var actualOutput= fs.readFileSync(i.inputs[0], "utf8");
      var resultAsExpected= correctOutput == actualOutput;
      if(!resultAsExpected){
        console.info("ACTUAL\n" + actualOutput)
        console.info("CORRECT\n" + correctOutput)
      }
      return resultAsExpected;
		}
	}
}

var script = 'challenges/variable-length.js';

var cpath= 'content/textfiles';

test.tests(script, [
	buildTest(cpath+'/pipe.txt', 'fixed1', 'Adam', 'Smith', '12121912'),
	buildTest(cpath+'/poem.txt', 'fixed2', 'Adam', 'Smith', '11111111')
]);
