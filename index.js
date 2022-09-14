
import * as modulo from "./export/controller.js"
import chalk from 'chalk';

const sumar = modulo.suma(4, 5)
console.log(sumar)

const multiplicar = modulo.multiplica(1, 2)
console.log(multiplicar)

console.log(chalk.green(multiplicar))



