import axios from 'axios'

const chatUtils = {
    scrape: _ => axios.get('/scrape'),
    getVerge: _ => axios.get('/verge'),
    getFavorites: _ => axios.get('/favorites'),
    addFavorite: id => axios.put(`/verge/${id}`),
    deleteVerge: id => axios.delete(`/verge/${id}`)
}
export default chatUtils
