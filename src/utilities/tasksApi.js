import axios from 'axios'
const baseURL = 'http://localhost:3001'

export const getTasks = (date) =>{
    const URL = `${baseURL}/${date}`
    const response = axios.get(URL)
    return response
}

export const createTask = (task) =>{
    const URL = baseURL
    const response = axios.post(URL, task)
    return response
}