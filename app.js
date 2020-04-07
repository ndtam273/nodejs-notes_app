const chalk = require('chalk')
const getNotes = require('./notes.js')

const getNotesExample = getNotes()
console.log(getNotesExample);

console.log(chalk.green.bold.inverse('Success!'))
