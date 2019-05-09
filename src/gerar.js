const fs = require('fs')
const path = require('path')

const desktopdir = path.join(require('os').homedir(), 'Desktop')

let parseFloatNull = (value, defaultValue) => {
	if(value) {
	  return parseFloat(value.replace(',', '.')) || defaultValue
	} else {
	  return defaultValue
	}
}

let saveFile = (text, filename) => {
	let path = desktopdir + '\\' + filename + '.txt'

	fs.writeFile(path, text, 'latin1', (err) => {  
		if (err) throw err
		console.log(path + ' saved!')
	})
}

let numDigits = (x) => {
  return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1
}

module.exports = {
	parseFloatNull,
	saveFile,
	numDigits
}