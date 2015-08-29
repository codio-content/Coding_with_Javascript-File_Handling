
fs = require('fs');

data = fs.readFileSync('test.txt')
data = data.toString()

array = data.split('\n')
final = []

for ( i=0; i<array.length; i++ ) {
  final[i] = array[i].split(',')
}

console.log(array)
console.log(final)


