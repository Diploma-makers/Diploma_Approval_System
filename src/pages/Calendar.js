import React, { useState } from "react";
import Calendar from 'react-calendar'

// moment.updateLocale('en',{weel: {dow: 1}})
// const startDay = moment().startOf('month').startOf('week');
// const endDay = moment().endOf('month').endOf('week');
// const calendar = [];
// const day = startDay;
// while(!day.isAfter(endDay)) {
//     calendar.push(day.clone());
//     day.add(1,'day');
// }
// console.log(calendar)
// window.moment = moment;


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