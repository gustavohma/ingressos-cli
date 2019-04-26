const {Command, flags} = require('@oclif/command')
const gerar = require('../gerar')
const chalk = require('chalk')


class GerarCommand extends Command {
  async run() {
	
	Number.prototype.padLeft = function (n,str){
    return Array(n-String(this).length+1).join(str||'0')+this
	}
	
    const {flags} = this.parse(GerarCommand)
    const starting = await gerar.parseFloatNull(flags.starting, 1)
    const ending = await gerar.parseFloatNull(flags.ending, 3)
    const prefix = flags.prefix || 'Nº'
    const digits = await gerar.parseFloatNull(flags.digits, gerar.numDigits(ending))
    const increment = await gerar.parseFloatNull(flags.increment, 1)
	const repeat = await gerar.parseFloatNull(flags.repeat, 1)
	
	let text = '1\n'
	text += '\\num\\\n'
	
	for (let i = starting; i <= ending; i += increment) {
		for(let j = 1; j <= repeat; j++) {
			let str =  prefix + ' ' + i.padLeft(digits)
			text += '\\' + str + '\\\n'
			this.log(chalk.green(`Gerando: ${i} = ${str}`))
		}
	}
	
	gerar.saveFile(text)
  }
}

GerarCommand.description = `${chalk.magenta('CLI para gerar numeração de Ingressos para o Corel Draw')}
${chalk.blue('Criado por Gustavo Henrique')}
`

GerarCommand.flags = {
  starting: flags.string({char: 's', description: 'Starting value'}),
  ending: flags.string({char: 'e', description: 'Ending value'}),
  prefix: flags.string({char: 'p', description: 'Prefix value: (Nº ou Mesa)'}),
  digits: flags.string({char: 'd', description: 'Digits value'}),
  increment: flags.string({char: 'i', description: 'Increment value'}),
  repeat: flags.string({char: 'r', description: 'Repeat value'}),
}

module.exports = GerarCommand
