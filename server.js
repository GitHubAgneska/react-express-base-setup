const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const app = express()
const request = require('request');

const apiUrl = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'

app.use(express.json())
// app.use(express.static('client/public')) // prod

// app.get("/api/hello", (req, res) => { res.send({message: "Hello friend."}) })
// app.get("/favicon.ico", (req, res) => { res.sendFile(path.resolve(__dirname, "/favicon.ico")); });

// res is a json url
app.get('/api/hello', (req, res) => {
    request(
        { url: apiUrl, json: true },
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                console.log(body)
                res.send(body)
            }
    })
});


app.listen(PORT, () => { console.log(`Server listening on ${PORT}`)})