import axios from 'axios'
//const baseURL = 'http://localhost:3001'
const baseURL = 'https://daily-planner-app.onrender.com'

export const getTasks = (date) =>{
    const URL = `${baseURL}/${date}`
    const response = axios.get(URL)
    return response
}

export const getTask = (id) =>{
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

export const editTask = (id, updatedTask) =>{
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedTask)
    return response
}

export const createTask = (task) =>{
    const URL = baseURL
    const response = axios.post(URL, task)
    return response
}

export const deleteTask = (id) =>{
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}