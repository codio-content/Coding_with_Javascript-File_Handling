
var fs= require('fs');
var test = require('./test-fw.js');

var script = 'challenges/write-text-file.js';

function replaceString(path, o, n){
	var t= fs.readFileSync(path, "utf8", "r");
	var re= new RegExp(o, "g");
	return t.replace(re, n);
}

function buildTest(pathi, patho, find, replace){
	var correctOutput= replaceString(pathi, find, replace);
	return {
		inputs: [pathi, patho, find, replace],
		outputs: [],
    validate: function(i){
      var actualOutput= fs.readFileSync(patho, "utf8", "r");
      var resultAsExpected= correctOutput == actualOutput;
      return resultAsExpected;
		}
	}
}

var cpath= 'content/textfiles';


test.tests(script, [
	buildTest(cpath+'/parrot.txt', '/tmp/write1.txt', 'parrot', 'chicken'),
	buildTest(cpath+'/empty.txt', '/tmp/write2.txt', 'parrot', 'chicken'),
	buildTest(cpath+'/parrot.txt', '/tmp/write3.txt', 'fungi', 'Patang')
]);
