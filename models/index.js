const { Schema, model } = require('mongoose')

const db = {
  Chat: require('./Profile.js/index.js')(Schema, model)
}

module.exports = db
