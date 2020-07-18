import React, { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";


function CalendarComponent(props) {
    const { scheduleState, assignmentState } = props;
    const [dayState, setDays] = useState({
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 0
    });
    var events = [];

    assignmentState.assignments.forEach(item => {
        if (!item.done) {
            events.push({
                title: item.name,
                date: moment(item.due).format('YYYY-MM-DD'),
                color: '#ffc400'
            });
        }
        else {
            events.push({
                title: item.name,
                date: moment(item.due).format('YYYY-MM-DD'),
                color: '#808080'
            });
        }
    });
    scheduleState.schedule.forEach(item => {
        if (item.location !== "Online ") {
            var days = [];
            item.days.forEach(day => {
                days.push(dayState[day]);
            });
            events.push({
                title: item.course,
                startTime: item.startTime,
                endTime: item.endTime,
                daysOfWeek: days,
                startRecur: moment().format('YYYY-MM-DD'),
                color: '#2c387e'
            });
        }
        else {
            events.push({
                title: `${item.course} - Online`,
                allDay: true,
                daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
                startRecur: moment().format('YYYY-MM-DD'),
                borderColor: '#2c387e',
                textColor: 'black',
                color: '#E5F9FF'
            });
        }
    });

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: "prev,next",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            events={events}
        />
    )

}

export default CalendarComponent;