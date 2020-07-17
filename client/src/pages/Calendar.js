import React, { useState, useEffect } from "react";
import { CalendarComponent } from "../components"
import API from "../utils/API";


function Calendar(props) {
  const [assignmentState, setAssignments] = useState({
    assignments: []
  });
  const [scheduleState, setSchedule] = useState({
    schedule: []
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    API.User.getById(props.user.id)
      .then(res => {
        setAssignments({ assignments: res.data.assignments });
        setSchedule({ schedule: res.data.scheduleItems });
      });
  }

  return (
    <CalendarComponent
      scheduleState={scheduleState}
      assignmentState={assignmentState}
    />
  )
}

export default Calendar;