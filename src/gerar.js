const fs = require('fs')

const homedir = require('os').homedir()

let parseFloatNull = (value, defaultValue) => {
	if(value) {
	  return parseFloat(value.replace(',', '.')) || defaultValue
	} else {
	  return defaultValue
	}
}

let saveFile = (text) => {
	let path = homedir + '\\desktop\\Ingressos.txt'

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