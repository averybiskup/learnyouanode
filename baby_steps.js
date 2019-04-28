
let count = 0
let t = process.argv
for (let i = 0; i <= process.argv.length; i++) {
	if (Number(t[i])) {
		count += Number(t[i])
	}
}

console.log(count)
