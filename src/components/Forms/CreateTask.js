import { createTask } from "../../utilities/tasksApi"

export default function CreateTask({onClose, date, month}){
    const handleSubmit = (e) => {
        e.preventDefault()//
        const task = {task: e.target.task.value, taskDate: e.target.date.value,taskMonth: e.target.month.value}
        createTask(task).then( ()=> onClose() )
    }
    
    
return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="task">Task:</label>
                <textarea name="task" id="task"></textarea>
                <input type="hidden" name="date" defaultValue={date}/>
                <input type="hidden" name="month" defaultValue={month}/>
            </div>
            <input className="button" type='submit'/> <button className="button" onClick={onClose}>Cancel</button> 
        </form>
    )
}