import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import Modal from '../components/Modal'
import { getTasks } from '../utilities/tasksApi';

export default function HomePage(){
    const [value, onChange] = useState(new Date())
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [tasks, setTasks] = useState([])
    const defaultMonth = new Date().getMonth()

   useEffect(() => {
    fetchTasks(value.getMonth());
  }, [value])

  const fetchTasks = async (month) => {
    try {
      const response = await getTasks(month);
      setTasks(response.data)
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  }


    const openModal = () => {
        setIsModalOpen(true);
      }
    
      const closeModal = () => {
        setIsModalOpen(false);
      }
    
    
    function tileContent({ date, view }) {
            const taskElements = tasks.map((task, i) => (
             <div key={i}>{
                date == task.taskDate ? task.task : null
                
                
             } </div>
            ));
            return <p>{taskElements}</p>;


    }
    
    
    return(
        <div>
            <Calendar  onClickDay={openModal} className="calendar" onChange={onChange} value={value} tileContent= {tileContent}  />
            <Modal form="CreateTask" month = {value.getMonth()} date={value}  isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}