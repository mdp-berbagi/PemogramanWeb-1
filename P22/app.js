const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    
    res.view = function(page) {
        fs.readFile(`./page/${page}`, "utf8", (err, data) => {
            if(err) {
                this.write(err.message)
                this.end()
            }

            this.write(data)
            this.end()
        })
    }

    res.json = function(obj) {
        this.write(JSON.stringify(obj))
        this.end()
    }


    let requestRouter = `${req.method} ${req.url}`;

    let web = require('./routers/web')
    if(requestRouter in web.router) {
        web.router[requestRouter](req, res)
        return
    }

    let api = require('./routers/api')
    if(requestRouter in api.router) {
        api.router[requestRouter](req, res)
        return
    }


    console.error(`User found bad route at ${requestRouter}`)
    res.writeHead(404)
    res.view("error/404.html")

}).listen(8084, () => {console.log('run on 8084')})