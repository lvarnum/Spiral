import React, { useState, useEffect } from "react";
import { AddAssignmentForm, AssignmentTimeline } from "../components";
import { Grid, Typography } from "@material-ui/core";
import { useLocation } from 'react-router-dom'
import API from "../utils/API";


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
                var assignments = [];
                res.data.assignments.forEach(item => assignments.push(item));
                setAssignments({ assignments: assignments });
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
            due: formObject.due
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

    return (
        <>
            <Grid container spacing={2} justify="center" direction="column" align="center" alignItems="center">
                <Grid item xs={5}>
                    <Typography variant="h3">{courseState.course}</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="h5">{location.session} Session</Typography>
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
                    />
                </Grid>
            </Grid>
        </>
    )

}

export default Assignments;