import axios from 'axios'

const chatUtils = {
  addUser: state => axios.post('/addUser', state), // state from the component --> gets sent to server --> shows up on server as req.body
  login: (username,password) => axios.get(`/login/${username}/${password}`)
}
export default chatUtils
