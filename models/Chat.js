module.exports = (Schema, model) => model('Verge', new Schema({
    title: String,
    link: String,
    type: String,
    favorite: Boolean
}))
