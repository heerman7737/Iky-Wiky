const { Chat } = require('../models')

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
  app.get(`/login/:username/:password`, (req, res) => {
    Chat.find({ username: req.params.username, password: req.params.password })
      .then(login => res.json(login))
      .catch(error => console.log(error))
  })
}
