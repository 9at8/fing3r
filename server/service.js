const express = require('express')
var fs = require('fs');
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/finger/:fingerer/:fingeree', (req, res) => {
  fs.writeFile(`/home/users/${req.params.fingerer}/config.finger`, `${req.params.fingeree}`, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
  });

  fs.writeFile(`/home/users/${req.params.fingerer}/config.finger`, `${req.params.fingeree}`, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
  });
})

app.listen("49153", () => {
    console.log("Listening on port 49153")
})
