import axios from 'axios'
import { baseUrl } from '@/http/commom'

axios.defaults.baseURL = baseUrl
axios.defaults.withCredentials = false
axios.defaults.headers['Content-Type'] = 'application/json'

export default axios
