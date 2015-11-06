
var fs= require('fs');
var test = require('./test-fw.js');

var script = 'challenges/write-text-file.js';

function replaceString(path, o, n){
	var t= fs.readFileSync(path, "utf8", "r");
	var re= new RegExp(o, "g");
	return t.replace(re, n);
}

function buildTest(pathi, patho, find, replace){
  var safeOutputPath= '/tmp/' + patho.replace(/\W/g, '')
  fs.unlink(safeOutputPath);
  
	var correctOutput= replaceString(pathi, find, replace);
	return {
		inputs: [pathi, safeOutputPath, find, replace],
		outputs: [],
    validate: function(i){
      var actualOutput= fs.readFileSync(safeOutputPath, "utf8", "r");
      var resultAsExpected= correctOutput == actualOutput;
      return resultAsExpected;
		}
	}
}

var cpath= 'content/textfiles';


test.tests(script, [
	buildTest(cpath+'/parrot.txt', 'write1', 'parrot', 'chicken'),
	buildTest(cpath+'/empty.txt', 'write2', 'parrot', 'chicken'),
	buildTest(cpath+'/parrot.txt', 'write3', 'fungi', 'Patang')
]);
