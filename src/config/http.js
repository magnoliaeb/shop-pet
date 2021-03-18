import axios from 'axios'

const http = axios.create({
    baseURL: 'http://sva.talana.com:8000/api/'
   
})

export default http