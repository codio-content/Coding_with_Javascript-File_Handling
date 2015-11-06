
var test = require('./test-fw.js');

var script = 'challenges/read-text-file.js';

test.tests(script, [
	{
		inputs: ['content/textfiles/parrot.txt', 'parrot'], 
		outputs: ['3']
	},
	{
		inputs: ['content/textfiles/empty.txt', 'parrot'], 
		outputs: ['0']
	},
]);
