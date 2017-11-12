var app = require('express')()
var io = require('socket.io')(49154)
var fs = require('fs')

io.on('connection', function (socket) {
  console.log("Someone connected!")
});

app.get('/finger/:fingeree/:fingerer', (req, res) => {
  fs.readFile(`/home/${req.params.fingerer}/.fing3ring.json`, (err, data) => {
    if (err) {
      data = []
    } else {
      data = JSON.parse(data)
    }

    data.push({
      username: req.params.fingeree,
      time: new Date()
    })

    fs.writeFile(`/home/${req.params.fingerer}/.fing3ring.json`, JSON.stringify(data))
  });

  fs.readFile(`/home/${req.params.fingeree}/.fing3r3d.json`, (err, data) => {
    if (err) {
      data = { users: [], orgasmLimit: 5 }
    } else {
      data = JSON.parse(data)
    }

    data.users.push({
      username: req.params.fingerer,
      time: new Date()
    })

    const notifData = {
      fingerer: req.params.fingerer,
      fingeree: req.params.fingeree,
      notified: false
    }
    
    if ((data.users.length % data.orgasmLimit) === 0) {
      io.emit('orgasm', notifData)
    } else {
      io.emit('finger', notifData)
    }

    fs.writeFile(`/home/${req.params.fingeree}/.fing3r3d.json`, JSON.stringify(data))
  });

  res.send()
})

app.listen(49153, () => console.log("Listening on port 49153"))
