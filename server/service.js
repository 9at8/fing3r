const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen("49153", () => {
    console.log("Listening on port 49153")
})
