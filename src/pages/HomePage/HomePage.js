import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

export default function HomePage(){
    const [value, onChange] = useState(new Date());
    function tileContent({ activeStartDate, date, view }) {
        return view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null
    }
    return(
        <div>
            <Calendar className="calendar" onChange={onChange} value={value} tileContent= {tileContent}  />
        </div>
    )
}