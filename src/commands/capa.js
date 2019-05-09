const {Command, flags} = require('@oclif/command')
const gerar = require('../gerar')
const chalk = require('chalk')

class CapaCommand extends Command {
  async run() {
	
	Number.prototype.padLeft = function (n,str){
    return Array(n-String(this).length+1).join(str||'0')+this
	}
	
    const {flags} = this.parse(CapaCommand)
    const starting = await gerar.parseFloatNull(flags.starting, 1)
    const ending = await gerar.parseFloatNull(flags.ending, 50)
    const prefix = flags.prefix || 'Nº'
    const digits = await gerar.parseFloatNull(flags.digits, gerar.numDigits(ending))
    const increment = await gerar.parseFloatNull(flags.increment, 50)
	
	let text = '1\n'
	text += '\\num\\\n'
	
	for (let i = starting; i <= ending; i += increment) {
		let last = i + (increment - 1)
		if (last > ending) last = ending
		let str =  prefix + ' ' + i.padLeft(digits) + ' - '
		str +=  prefix + ' ' + last.padLeft(digits)
	
		text += '\\' + str + '\\\n'
		this.log(chalk.green(`Gerando Capas: ${i} = ${str}`))
	}
	
	gerar.saveFile(text, "Capas")
  }
}

CapaCommand.description = `CLI to generate ticket covers for Corel Draw.
Created by Gustavo Henrique
`

CapaCommand.flags = {
  starting: flags.string({char: 's', description: 'Starting value'}),
  ending: flags.string({char: 'e', description: 'Ending value'}),
  prefix: flags.string({char: 'p', description: 'Prefix value: (Nº or Table)'}),
  digits: flags.string({char: 'd', description: 'Digits value'}),
  increment: flags.string({char: 'i', description: 'Increment value'}),
}

module.exports = CapaCommand
