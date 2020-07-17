import React, { useState, useEffect } from "react";
import { AddAssignmentForm, AssignmentTimeline } from "../components";
import { Grid, Typography, IconButton } from "@material-ui/core";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { useLocation } from 'react-router-dom';
import API from "../utils/API";
import { Link } from "react-router-dom";
import moment from "moment";


function Assignments(props) {
    const initialFormState = { name: "", notes: "", due: "" };
    const [formObject, setFormObject] = useState(initialFormState);
    const [assignmentState, setAssignments] = useState({
        assignments: []
    });
    const [courseState, setCourse] = useState({
        course: ""
    });
    const location = useLocation();

    useEffect(() => {
        loadAssignments();
    }, [props.user.id]);

    const loadAssignments = () => {
        API.ScheduleItem.getById(location.course)
            .then(res => {
                setCourse({ course: res.data.course })
                setAssignments({ assignments: res.data.assignments });
            });
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        API.Assignment.create({
            name: formObject.name,
            notes: formObject.notes,
            due: formObject.due,
            done: false
        })
            .then(res => {
                API.User.update(props.user.id,
                    {
                        $push: { assignments: res.data._id }
                    });
                API.ScheduleItem.update(location.course,
                    {
                        $push: { assignments: res.data._id }
                    });
            }).then(res => {
                setFormObject(initialFormState);
                loadAssignments();
            });
    }

    const handleCheck = (id) => {
        API.Assignment.update(id, {
            done: true
        }).then(res => loadAssignments());

    }

    const handleDelete = (id) => {
        API.Assignment.delete(id)
            .then(res => loadAssignments());
        API.User.update(props.user.id, {
            $pull: { assignments: id }
        });
        API.ScheduleItem.update(location.course, {
            $pull: { assignments: id }
        });
    }

    return (
        <>
            <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center"
                style={{ border: "solid 2px #2c387e", marginBottom: "15px" }}>
                <Grid item xs={5}>
                    <Typography variant="h3">{courseState.course}</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="h5">{props.user.session} Session</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h5">{moment().format('dddd, MMMM Do YYYY, h:mm a')}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <IconButton component={Link} to={"/calendar"}>
                        <CalendarTodayIcon style={{ fontSize: "50px" }} color="primary" /></IconButton>
                </Grid>
                <Grid item xs={5}>
                    <AddAssignmentForm
                        formObject={formObject}
                        handleInputChange={handleInputChange}
                        handleFormSubmit={handleFormSubmit}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} justify="center" direction="row" align="center">
                <Grid item xs={9}>
                    <AssignmentTimeline
                        assignmentState={assignmentState}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                </Grid>
            </Grid>
        </>
    )

}

export default Assignments;