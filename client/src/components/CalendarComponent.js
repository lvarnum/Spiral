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
        events.push({
            title: item.name,
            date: moment(item.due).format('YYYY-MM-DD')
        });
    });
    scheduleState.schedule.forEach(item => {
        var days = [];
        item.days.forEach(day => {
            days.push(dayState[day]);
        });
        events.push({
            title: item.course,
            startTime: item.startTime,
            endTime: item.endTime,
            daysOfWeek: days,
            startRecur: moment().format('YYYY-MM-DD')
        });
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