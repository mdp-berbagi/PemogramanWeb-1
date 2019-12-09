const express = require('express')
const app = express()

const project = {
    folder: __dirname
}

Object.freeze(project)


app.use('/static', express.static('static'))
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'))


app.get('/', (req, res) => {
    res.sendFile(project.folder + '/views/index.html')
})

app.get('/about', (req, res) => {
    res.send("about")
})

app.get('/login', (req, res) => {
    res.send("login")
})

app.post('/singup', (req, res) => {
    res.json([
        {
            "id": "1",
            "nama": "Aziz"
        },
        {
            "id": "2",
            "nama": "Aziz 2"
        },
    ])
})

app.listen(8001, () => {console.log('running in port 8001')})