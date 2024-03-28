import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://biggunsite.co.kr'
})

export default instance
