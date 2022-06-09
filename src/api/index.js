import axios from 'axios'
const baseURL = import.meta.env.VITE_APP_URL

const http = axios.create({
  baseURL,
  timeout: 20000,
})

const api = {}

api.get = function(url, params={}) {
  return new Promise((resolve) => {
    http({ method: "get", url: url, params:params }).then((res)=>{ resolve(res ) })
  })
}

export default api