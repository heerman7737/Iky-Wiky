module.exports = (Schema, model) => model('Profile', new Schema({
  first_name: String,
  last_name: String,
  phone: String,
  avatar: String, // url from AWS
  username: String,
  password: String,
  id: String
}))
