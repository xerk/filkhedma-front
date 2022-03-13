import { createApp } from 'vue'
const app = createApp({})
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8000/',
})

app.config.globalProperties.$http = http

export default http