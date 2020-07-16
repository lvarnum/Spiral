import React, { useState, useEffect } from "react";
import { AddClassForm, ScheduleTimeline } from "../components";
import { Grid, Typography } from "@material-ui/core";
import API from "../utils/API";

function Schedule(props) {
    const initialFormState = { prefix: "", number: "", professor: "", building: "", roomNumber: "", startTime: "", endTime: "", days: [] };
    const [formObject, setFormObject] = useState(initialFormState);
    const [universityState, setUniversity] = useState({
        university: ""
    });
    const [scheduleState, setSchedule] = useState({
        schedule: []
    });
    const [userSession, setSession] = useState({
        session: ""
    });
    const [userName, setName] = useState({
        first: ""
    });

    useEffect(() => {
        loadSchedule();
    }, []);

    const loadSchedule = () => {
        API.User.getById(props.user.id)
            .then(res => {
                setSession({ session: res.data.session });
                setName({ first: res.data.firstName });
                setSchedule({ schedule: res.data.scheduleItems });
                API.University.getById(res.data.university._id)
                    .then(res => setUniversity({ university: res.data }))
            });
    }

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
            location: `${formObject.building} ${formObject.roomNumber}`,
            days: formObject.days
        }).then(res => {
            API.User.update(props.user.id,
                {
                    $push: { scheduleItems: res.data._id }
                }).then(res => {
                    setFormObject(initialFormState);
                    loadSchedule();
                });
        });
    }
    return (
        <>
            <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center"
                style={{ border: "solid 2px #2c387e", marginBottom: "15px" }}>
                <Grid item xs={12}>
                    <Typography variant="h2">{userName.first}'s Schedule</Typography>
                </Grid >
                <Grid item xs={12}>
                    <Typography variant="h4">{universityState.university.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">{userSession.session} Session</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <AddClassForm
                        formObject={formObject}
                        handleInputChange={handleInputChange}
                        handleFormSubmit={handleFormSubmit}
                        universityState={universityState}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} direction="row" align="center" justify="center">
                <Grid item xs={12}>
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