var http = require('http')
var fs = require('fs')

var server = http.createServer((req, res) => {

    fs.readFile(`./page${req.url}`, 'utf8', (err, content) => {
        if(err) {
            console.log(err.message)
            res.end()   
            return;
        }

        res.write(content)
        res.end()
    })
    
    
})

server.listen(1337, () => {
    console.log('server run on 1337')
})