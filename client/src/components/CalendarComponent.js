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
    AllDayPanel,
    AppointmentTooltip,
    Resources
} from '@devexpress/dx-react-scheduler-material-ui';
import {
    teal, amber, deepOrange,
} from '@material-ui/core/colors';


function CalendarComponent(props) {
    const { scheduleState, assignmentState } = props;
    const [dayState, setDays] = useState({
        Monday: "MO",
        Tuesday: "TU",
        Wednesday: "WE",
        Thursday: "TH",
        Friday: "FR",
        Saturday: "SA",
        Sunday: "SU"
    });

    scheduleState.schedule.sort(function (a, b) {
        if (a.startTime > b.startTime) {
            return 1;
        }
        if (a.startTime < b.startTime) {
            return -1;
        }
        return 0;
    });

    var colors = ["#2c387e", amber, teal, deepOrange];
    var events = [];
    var instances = [
        { id: "incomplete", text: "Incomplete", color: "green" },
        { id: "complete", text: "Completed", color: "#808080" }
    ];

    var color = 0;
    for (var i = 0; i < scheduleState.schedule.length; i++) {
        instances.push({ id: i, text: scheduleState.schedule[i].location, color: colors[color] });
        color++;
        if (color === colors.length) {
            color = 0;
        }
    }

    const resources = [
        {
            fieldName: 'id',
            instances: instances
        }
    ]

    assignmentState.assignments.forEach(item => {
        if (!item.done) {
            events.push({
                title: item.name,
                startDate: new Date(`${item.due.substring(0, 4)}-${item.due.substring(5, 7)}-${item.due.substring(8, 10)}T00:00:01`),
                endDate: new Date(`${item.due.substring(0, 4)}-${item.due.substring(5, 7)}-${item.due.substring(8, 10)}T00:00:02`),
                allDay: true,
                id: "incomplete"
            });
        }
        else {
            events.push({
                title: item.name,
                startDate: new Date(`${item.due.substring(0, 4)}-${item.due.substring(5, 7)}-${item.due.substring(8, 10)}T00:00:01`),
                endDate: new Date(`${item.due.substring(0, 4)}-${item.due.substring(5, 7)}-${item.due.substring(8, 10)}T00:00:02`),
                allDay: true,
                id: "complete"
            });

        }
    });
    var index = 0;
    scheduleState.schedule.forEach(item => {
        if (item.startTime !== "") {
            var classDays = [];
            item.days.forEach(day => {
                classDays.push(dayState[day]);
            });
            events.push({
                title: item.course,
                startDate: new Date(`${moment().format("YYYY")}-01-01T${item.startTime}:00`),
                endDate: new Date(`${moment().format("YYYY")}-01-01T${item.endTime}:00`),
                rRule: `RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=${classDays.join(",")}`,
                id: index
            });
        }
        else {
            events.push({
                title: `${item.course}`,
                startDate: new Date(`${moment().format("YYYY")}-01-01T00:00:00`),
                endDate: new Date(`${moment().format("YYYY")}-01-01T23:59:00`),
                rRule: 'RRULE:FREQ=DAILY',
                allDay: true,
                id: index
            });
        }
        index++;
    });

    return (
        <Paper style={{ fontFamily: 'Varta, sans-serif', border: "solid 2px #2c387e", padding: "5px" }}>
            <Scheduler
                data={events}
            >
                <ViewState
                    defaultCurrentDate={moment().format('YYYY-MM-DD')}
                    defaultCurrentViewName="Week"
                />
                <MonthView />
                <DayView
                    startDayHour={6}
                    endDayHour={22}
                />
                <WeekView
                    startDayHour={6}
                    endDayHour={22}
                />
                <AllDayPanel />
                <Appointments />
                <AppointmentTooltip
                    showCloseButton
                />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <ViewSwitcher />
                <Resources
                    data={resources}
                    mainResourceName="id"
                />
            </Scheduler>
        </Paper>
    )

}

export default CalendarComponent;