let fs = require('fs')

let get_files = (path, ext, callback) => {
	f = fs.readdir(path, (err, list) => {
		if (err)
			return callback(err, list)

		list = list.filter((f) => {

			return (f.split('.')[1] === ext)
		
		})
		callback(err, list)
	})
}

module.exports = get_files
