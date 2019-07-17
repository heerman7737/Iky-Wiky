const { Chat } = require('../models')

module.exports = app => {
  app.post('/addUser', (req, res) => {
    Chat.findOneAndUpdate({ username: req.body.username },
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        avatar: req.body.avatar,
        username: req.body.username,
        password: req.body.password,
        id:req.body.id
      }, { upsert: true }, function (error, response) {
        if (error) {
          console.log(error)
        }
        res.sendStatus(200)
      })
  })
  app.get('/login/:username/:password', (req, res) => {
    Chat.find({ username: req.params.username, password: req.params.password })
      .then(login => res.json(login))
      .catch(error => console.log(error))
  })
}