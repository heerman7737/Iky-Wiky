import axios from 'axios'

const chatUtils = {
  addUser: _ => axios.post('/addUser'),
  getVerge: _ => axios.get('/verge'),
  getFavorites: _ => axios.get('/favorites'),
  addFavorite: id => axios.put(`/verge/${id}`),
  deleteVerge: id => axios.delete(`/verge/${id}`)
}
export default chatUtils
