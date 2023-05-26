import React, { useState } from "react";
import Calendar from 'react-calendar'

const CalendarApp = () =>{
    const [value, onChange] = useState(new Date());

    return (
        <>
            <div className="docPage">
                <h1>Calendar</h1>
                <hr></hr>
                <Calendar 
                    locale="en"
                    onChange={onChange} 
                    value={value} 
                />
            </div>
        </>
    
    );
}

export default CalendarApp