import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import moment from "moment";


function CalendarComponent(props) {
    const { scheduleState, assignmentState } = props;
    var events = [];
    assignmentState.assignments.forEach(item => {
        events.push({ title: item.name, date: moment(item.due).format('YYYY-MM-DD') });
    });
    // scheduleState.schedule.forEach(item => {
    //     events.push({ title: item.course, starTime: moment(item.startTime, 'HH:mm').format('hh:mm a'), endTime: moment(item.endTime, 'HH:mm').format('hh:mm a') });
    // });

    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
        />
    )

}

export default CalendarComponent;