import React, { useState, useEffect } from "react";
import { AddClassForm, ScheduleTimeline } from "../components";
import { Box, Grid, Typography, Paper, Divider } from "@material-ui/core";
import API from "../utils/API";
import moment from "moment";

function Schedule(props) {
    const initialFormState = { prefix: "", number: "", professor: "", building: "", roomNumber: "", startTime: "", endTime: "" };
    const [formObject, setFormObject] = useState(initialFormState);
    const [universityState, setUniversity] = useState({
        university: ""
    });
    const [scheduleState, setSchedule] = useState({
        schedule: []
    });
    const [userSession, setSession] = useState({
        session: ""
    })

    useEffect(() => {
        API.User.getById(props.user.id)
            .then(res => {
                setSession({ session: res.data.session })
                var courses = [];
                res.data.scheduleItems.forEach(item => {
                    API.ScheduleItem.getById(item)
                        .then(res => courses.push(res.data));
                });
                API.University.getById(res.data.university)
                    .then(res => {
                        setUniversity({ university: res.data });
                        setSchedule({ schedule: courses })
                    });
            });
    }, [props.user.id]);

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        API.ScheduleItem.create({
            course: `${formObject.prefix} ${formObject.number}`,
            professor: formObject.professor,
            startTime: formObject.startTime,
            endTime: formObject.endTime,
            location: `${formObject.building} ${formObject.roomNumber}`
        }).then(res => {
            API.User.update(props.user.id,
                {
                    $push: { scheduleItems: res.data._id }
                }).then(res => console.log(res))
        });
        setFormObject(initialFormState);
    }
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
                <Typography variant="h3">{universityState.university.name}</Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
                <Typography variant="h5">{userSession.session} Session</Typography>
            </Box>
            <Divider variant="middle" />
            <Box display="flex" justifyContent="center" alignItems="center" mt={3} mb={3}>
                <AddClassForm
                    formObject={formObject}
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                    universityState={universityState}
                />
            </Box>
            <Grid container spacing={0} direction="row" align="center">
                <Grid item xs={3}>
                    <Paper style={{ backgroundColor: '#2c387e', padding: "10px" }}>
                        <Typography variant="h2" style={{ color: "white" }}>S</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>C</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>H</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>E</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>D</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>U</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>L</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>E</Typography>
                    </Paper>
                </Grid >
                <Grid item xs={9}>
                    <ScheduleTimeline
                        scheduleState={scheduleState}
                        userSession={userSession}
                    />
                </Grid>
            </Grid >
        </>
    );

}

export default Schedule;