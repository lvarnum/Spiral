import React, { useState, useEffect  }from 'react'
import { Button, TextField, Container, Grid, Paper, Typography, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import API from "../utils/API";




function UserInfo(props) {
    const { formObject } = props;

   useEffect(() => {
            API.User.getById(props.user.id)
            console.log(props.user.id)
                .then(res => {
                    // setSession({ session: res.data.session })
                    // var courses = [];
                    // res.data.scheduleItems.forEach(item => {
                    //     API.ScheduleItem.getById(item)
                    //         .then(res => courses.push(res.data));
                    // });
                    // API.University.getById(res.data.university)
                    //     .then(res => {
                    //         setUniversity({ university: res.data });
                    //         setSchedule({ schedule: courses })
                    //     });
                });
        }, [props.user.id])

   
    return (

       

       <div>
             <h1>User Info</h1>
             <h1>users name: {formObject.firstName} </h1>
        </div>
    )

 };
export default UserInfo
