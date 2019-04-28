let fs = require('fs')

let path = process.argv[2]
let ext = process.argv[3]

let find_files = require('./get_files.js')

let callback = (err, list) => {
	if (err)
		return err
 
	list.map((i) => {console.log(i)}) 
}

l = find_files(path, ext, callback)


