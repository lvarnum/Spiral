import React, { useState } from "react";
import moment from "moment";
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    WeekView,
    Appointments,
    Toolbar,
    ViewSwitcher,
    MonthView,
    DateNavigator
} from '@devexpress/dx-react-scheduler-material-ui';


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
        <Paper>
            <Scheduler
                data={events}
            >
                <ViewState
                    currentDate={moment().format()}
                    defaultCurrentViewName="Week"
                />
                <MonthView />
                <DayView
                    startDayHour={0}
                    endDayHour={24}
                />
                <WeekView
                    startDayHour={0}
                    endDayHour={24}
                />
                <Toolbar />
                <DateNavigator />
                <ViewSwitcher />
                <Appointments />
            </Scheduler>
        </Paper>
    )

}

export default CalendarComponent;