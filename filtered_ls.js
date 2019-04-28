let fs = require('fs')

let path = process.argv[2]
let ext = "." + process.argv[3]

let callback = (err, list) => {
	if (!err) {
		for (let i = 0; i < list.length; i++) {
			//console.log(list[i].split('.')[1], ext)
			if ('.' + list[i].split('.')[1] == ext) {
				console.log(list[i])
			}
		}
	}
}

f = fs.readdir(path, callback)
