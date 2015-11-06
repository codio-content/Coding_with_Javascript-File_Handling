var fs= require('fs');
var test = require('./test-fw.js');

function padString(text, padCount){
  var pad= "";
  for(var i=0; i < padCount; i++) {
    pad += " ";
  }
  return (text + pad).substring(0, padCount)
}

function buildTest(pathi, patho, firstname, lastname, bday){
  var safeOutputPath= '/tmp/' + patho.replace(/\W/g, '')
  console.info("IN["+ pathi +"]")
  
  var startingData= fs.readFileSync(pathi, 'utf8')
  fs.writeFileSync(safeOutputPath, startingData, 'utf8')
  
  var pf= padString(firstname, 16)
  var pl= padString(lastname, 16)
  var re= new RegExp(pf+pl+"........")
	var correctOutput= startingData.replace(re, pf+pl+bday)
  
	return {
		inputs: [safeOutputPath, firstname, lastname, bday],
		outputs: [],
    validate: function(i){
      var actualOutput= fs.readFileSync(safeOutputPath, "utf8");
      var resultAsExpected= correctOutput == actualOutput;
      return resultAsExpected;
		}
	}
}

var script = 'challenges/fixed-length-record.js';

var cpath= 'content/textfiles';

test.tests(script, [
	buildTest(cpath+'/fixed-length.txt', 'fixed1', 'Adam', 'Smith', '12121912'),
	buildTest(cpath+'/poem.txt', 'fixed2', 'Adam', 'Smith', '11111111')
]);
