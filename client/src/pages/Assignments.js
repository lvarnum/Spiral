import React, { useState, useEffect } from "react";
import { AddAssignmentForm, AssignmentTimeline } from "../components";
import { Box, Grid, Typography, Paper, Divider } from "@material-ui/core";
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
        API.ScheduleItem.getById(location.course)
            .then(res => {
                setCourse({ course: res.data.course })
                var assignments = [];
                res.data.assignments.forEach(item => assignments.push(item));
                for (var i = 0; i < assignments.length - 1; i++) {
                    if (assignments[i].due > assignments[i + 1].due) {
                        var temp = assignments[i];
                        assignments[i] = assignments[i + 1];
                        assignments[i + 1] = temp;
                    }
                }
                setAssignments({ assignments: assignments });
            });
    }, [props.user.id]);

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
            });
        setFormObject(initialFormState);
    }

    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
                <Typography variant="h3">{courseState.course}</Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
                <Typography variant="h5">{location.session} Session</Typography>
            </Box>
            <Divider variant="middle" />
            <Box display="flex" justifyContent="center" alignItems="center" mb={3} mt={3}>
                <AddAssignmentForm
                    formObject={formObject}
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                />
            </Box>
            <Grid container spacing={0} justify="center" direction="row" align="center">
                <Grid item xs={3}>
                    <Paper style={{ backgroundColor: '#2c387e', padding: "10px" }}>
                        <Typography variant="h2" style={{ color: "white" }}>A</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>S</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>S</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>I</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>G</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>N</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>M</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>E</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>N</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>T</Typography>
                        <Typography variant="h2" style={{ color: "white" }}>S</Typography>
                    </Paper>
                </Grid >
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