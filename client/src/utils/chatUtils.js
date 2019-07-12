import axios from 'axios'

const chatUtils = {
  addUser: state => axios.post('/addUser', state), // state from the component --> gets sent to server --> shows up on server as req.body
  login: (username,password) => axios.get(`/login/${username}/${password}`),
  getFavorites: _ => axios.get('/favorites'),
  addFavorite: id => axios.put(`/verge/${id}`),
  deleteVerge: id => axios.delete(`/verge/${id}`)
}
export default chatUtils
