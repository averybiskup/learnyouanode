let fs = require('fs')

file = fs.readFileSync(process.argv[2]).toString()
//console.log(file)
l = file.split('\n')

console.log(l.length-1)


