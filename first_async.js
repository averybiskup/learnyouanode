let fs = require('fs')

let callback = (err, data) => {
	if (!err) {
		l = data.split('\n')
		console.log(l.length - 1)
	}
}

f = fs.readFile(process.argv[2], 'utf8', callback)

