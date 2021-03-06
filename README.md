ingressos-cli
=============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mynewcli.svg)](https://npmjs.org/package/ingressos-cli)
[![Downloads/week](https://img.shields.io/npm/dw/mynewcli.svg)](https://npmjs.org/package/ingressos-cli)
[![License](https://img.shields.io/npm/l/mynewcli.svg)](https://github.com/gustavohma/ingressos-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ingressos-cli
$ ingressos-cli COMMAND
running command...
$ ingressos-cli (-v|--version|version)
ingressos-cli/1.0.5 win32-x64 node-v10.15.3
$ ingressos-cli --help [COMMAND]
USAGE
  $ ingressos-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ingressos-cli capa`](#ingressos-cli-capa)
* [`ingressos-cli gerar`](#ingressos-cli-gerar)
* [`ingressos-cli help [COMMAND]`](#ingressos-cli-help-command)

## `ingressos-cli capa`

CLI to generate ticket covers for Corel Draw.

```
USAGE
  $ ingressos-cli capa

OPTIONS
  -d, --digits=digits        Digits value
  -e, --ending=ending        Ending value
  -i, --increment=increment  Increment value
  -p, --prefix=prefix        Prefix value: (Nº or Table)
  -s, --starting=starting    Starting value

DESCRIPTION
  Created by Gustavo Henrique
```

_See code: [src\commands\capa.js](https://github.com/gustavohma/ingressos-cli/blob/v1.0.5/src\commands\capa.js)_

## `ingressos-cli gerar`

CLI to Generate Ticket Numbering for Corel Draw

```
USAGE
  $ ingressos-cli gerar

OPTIONS
  -d, --digits=digits        Digits value
  -e, --ending=ending        Ending value
  -i, --increment=increment  Increment value
  -p, --prefix=prefix        Prefix value: (Nº or Table)
  -r, --repeat=repeat        Repeat value
  -s, --starting=starting    Starting value

DESCRIPTION
  Created by Gustavo Henrique
```

_See code: [src\commands\gerar.js](https://github.com/gustavohma/ingressos-cli/blob/v1.0.5/src\commands\gerar.js)_

## `ingressos-cli help [COMMAND]`

display help for ingressos-cli

```
USAGE
  $ ingressos-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src\commands\help.ts)_
<!-- commandsstop -->
