import axios from 'axios'
const baseURL = import.meta.env.VITE_APP_URL

const http = axios.create({
  baseURL,
  timeout: 20000,
})

const api = {}

api.get = function(url, params={}) {
  let newUrl = '/japan' + url
  if(window.localStorage.getItem('language') && window.localStorage.getItem('language') === 'zh') {
    newUrl = url
  }
  return new Promise((resolve) => {
    http({ method: "get", url: newUrl, params:params }).then((res)=>{ resolve(res ) })
  })
}

export default api