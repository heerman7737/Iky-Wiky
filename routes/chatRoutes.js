const { Chat } = require('../models')
const axios = require('axios')

module.exports = app => {
  app.post('/addUser', (req, res) => {
    Chat.create({
      first_name: "Test",
      last_name: "Test",
      phone: "Test",
      avatar: "Test",
      username: "Test",
      password: "Test"
    })
    .then(_ => res.sendStatus(200))
    .catch(error => console.log(error))
  })
}
