import { getTask, editTask } from "../../utilities/tasksApi"
import { useState, useEffect } from "react"

export default function EditTask({onClose, id}){
    const [task, setTask] = useState({})

    useEffect(()=>{
        fetchTask(id)
    })
    const fetchTask = async (id) => {
        try {
          const response = await getTask(id)
          setTask(response.data)
        } catch (error) {
          console.log('Error fetching task:', error)
        }
      }

    const handleSubmit = (e) => {
        e.preventDefault()//
        const updatedTask = {task: e.target.task.value}
        editTask(id, updatedTask).then( ()=> onClose() )
    }
    
    
return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="task">Task:</label>
                <textarea name="task" id="task" defaultValue={task.task}></textarea>
            </div>
            <input className="button" type='submit'/> <button className="button" onClick={onClose}>Cancel</button> 
        </form>
    )
}