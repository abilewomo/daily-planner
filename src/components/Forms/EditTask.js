import { getTask, editTask } from "../../utilities/tasksApi"
import { useState, useEffect } from "react"
import {useNavigate, useParams} from 'react-router-dom'

export default function EditTask(){
    const [theTask, setTheTask] = useState([])
   
    const params = useParams() 
    const id = params.id
    //console.log(id)
    const nav = useNavigate()

    useEffect(()=>{
        fetchTask(id)
    },[])
    const fetchTask = async (id) => {
        try {
          const response = await getTask(id)
          setTheTask(response.data)
          console.log(theTask)
        } catch (error) {
          console.log('Error fetching task:', error)
        }
      }

    const handleSubmit = (e) => {
        e.preventDefault()//
        const updatedTask = {task: e.target.task.value}
        editTask(id, updatedTask).then( ()=>  nav(`/${id}`) )
    }
    
    
return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="task">Task:</label>
                <input type="text" name="task" id="task" defaultValue={theTask.task} />
            </div>
            <input className="button" type='submit'/> 
        </form>
    )
}