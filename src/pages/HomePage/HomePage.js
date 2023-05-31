import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import Modal from './components/Modal';

export default function HomePage(){
    const [value, onChange] = useState(new Date())
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => {
        setIsModalOpen(true);
      }
    
      const closeModal = () => {
        setIsModalOpen(false);
      }

    function tileContent({ activeStartDate, date, view }) {
        return view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null
    }
    
    return(
        <div>
            <Calendar onClickDay={openModal} className="calendar" onChange={onChange} value={value} tileContent= {tileContent}  />
            <Modal date={value}  isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}