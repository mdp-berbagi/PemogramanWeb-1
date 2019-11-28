// Hello World
console.log("Hello World")

// get module
var date = require('./waktu')
console.log(date.getDate())
console.log(date.getDate().getMonth())

// file system
var _fs = require('fs')

// write file
_fs.appendFile('./example.txt', 'This Content by Append\n', (err) => {
    if(err) {
        console.log(err.message)
        return;
    }
})

// read file
_fs.readFile('./example.txt', 'utf8', (err, content) => {
    if(err) {
        console.log(err.message)
        return;
    }
    console.log(content)
})
