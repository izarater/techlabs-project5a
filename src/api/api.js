import axios from 'axios'


export default axios.create({
  baseURL : 'http://techlabs-savefood.herokuapp.com/api'
})
