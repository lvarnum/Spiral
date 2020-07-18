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
    TodayButton,
    DateNavigator,
    AllDayPanel
} from '@devexpress/dx-react-scheduler-material-ui';


function CalendarComponent(props) {
    const { scheduleState, assignmentState } = props;

    var events = [];

    assignmentState.assignments.forEach(item => {
        if (!item.done) {
            events.push({
                title: item.name,
                startDate: (`${item.due.substring(0, 4)}, ${item.due.substring(5, 7)}, ${item.due.substring(8, 10)}`),
                startDate: (`${item.due.substring(0, 4)}, ${item.due.substring(5, 7)}, ${item.due.substring(8, 10)}`)
            });
        }
    });
    scheduleState.schedule.forEach(item => {
        if (item.location !== "Online ") {
            events.push({
                title: item.course,
            });
        }
        else {
            events.push({
                title: `${item.course} - Online`,
                allDay: true
            });
        }
    });

    return (
        <Paper>
            <Scheduler
                data={events}
            >
                <ViewState
                    defaultCurrentDate={moment().format('YYYY-MM-DD')}
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
                <AllDayPanel />
                <Appointments />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <ViewSwitcher />
            </Scheduler>
        </Paper>
    )

}

export default CalendarComponent;