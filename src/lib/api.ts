import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

if (!API_KEY) {
  throw new Error('VITE_API_KEY no está definida en tu archivo .env')
}

const api = axios.create({
  baseURL: API_BASE_URL,
})

api.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      apiKey: API_KEY,
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api
