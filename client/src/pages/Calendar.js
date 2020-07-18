import React, { useState, useEffect } from "react";
import { CalendarComponent } from "../components";
import { Grid, Typography } from "@material-ui/core";
import API from "../utils/API";


function Calendar(props) {
  const [assignmentState, setAssignments] = useState({
    assignments: []
  });
  const [scheduleState, setSchedule] = useState({
    schedule: []
  });
  const [universityState, setUniversity] = useState({
    university: ""
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    API.User.getById(props.user.id)
      .then(res => {
        setAssignments({ assignments: res.data.assignments });
        setSchedule({ schedule: res.data.scheduleItems });
        setUniversity({ university: res.data.university.name })
      });
  }

  return (
    <>
      <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center"
        style={{ border: "solid 2px #2c387e", marginBottom: "15px" }}>
        <Grid item xs={12}>
          <Typography variant="h3">{props.user.firstName}'s Calendar</Typography>
        </Grid >
        <Grid item xs={12}>
          <Typography variant="h4">{universityState.university}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">{props.user.session} Session</Typography>
        </Grid>
      </Grid>
      <CalendarComponent
        scheduleState={scheduleState}
        assignmentState={assignmentState}
      />
    </>
  )
}

export default Calendar;