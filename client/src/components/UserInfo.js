import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core';
import API from "../utils/API";




function UserInfo(props) {
    const [scheduleState, setSchedule] = useState({
        schedule: []
    });

    const [universityState, setUniversity] = useState({
        university: ""
    });
    useEffect(() => {
        loadUserInfo();
    }, [props.user.id]);

    const loadUserInfo = () => {
        API.User.getById(props.user.id)
        .then(res => {
            setSchedule({ schedule: res.data.scheduleItems });
        });
    
    API.University.getById(props.user.university)
        .then(res => setUniversity({ university: res.data }))

    };


return (
    <>
        <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center"
            style={{ border: "solid 2px #2c387e", marginBottom: "15px" }}>
            <Grid item xs={12}>
                <Typography variant="h2">{props.user.firstName}</Typography>
            </Grid >
            <Grid item xs={12}>
                <Typography variant="h2">{props.user.email}</Typography>
            </Grid >
            <Grid item xs={12}>
                <Typography variant="h4">{universityState.university.name}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">{props.user.session} Session</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">{props.user.classes}</Typography>
            </Grid>
        </Grid>
    </>
)
};

export default UserInfo
