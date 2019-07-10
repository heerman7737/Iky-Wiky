const { Schema, model } = require('mongoose')

const db = {
  Chat: require('./Chat.js')(Schema, model)
}

module.exports = db
