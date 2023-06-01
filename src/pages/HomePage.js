import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import Modal from '../components/Modal'
import { getTasks } from '../utilities/tasksApi';

export default function HomePage(){
    const [value, onChange] = useState(new Date())
    const [isModalOpen, setIsModalOpen] = useState(false)
   // const [tasks, setTasks] = useState([])
    const openModal = () => {
        setIsModalOpen(true);
      }
    
      const closeModal = () => {
        setIsModalOpen(false);
      }
    
    function tileContent({ date, view }) {
        const tasks =  getTasks(date).then((res)=>{
            console.log(res.data)
        })
        const theTask = async ()=>{
            const a = await tasks
            return a
        }   
       //console.log(theTask())
        
        return view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null

    }
    
    
    return(
        <div>
            <Calendar  onClickDay={openModal} className="calendar" onChange={onChange} value={value} tileContent= {tileContent}  />
            <Modal form="CreateTask" date={value}  isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}