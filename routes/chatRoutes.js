const { Chat } = require('../models')
const axios = require('axios')

module.exports = app => {
  app.post('/addUser', (req, res) => {
    Chat.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      avatar: req.body.avatar,
      username: req.body.username,
      password: req.body.password
    })
      .then(_ => res.sendStatus(200))
      .catch(error => console.log(error))
  })
}
