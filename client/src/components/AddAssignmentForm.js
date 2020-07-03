import React from "react";
import { Button, TextField, Container, Grid, Paper, Typography } from '@material-ui/core';

function AddAssignmentForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <>
            <Paper>
                <Container maxWidth="sm">
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h4" gutterBottom>
                                    Add Assignment
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Assignment Name"
                                    value={formObject.assignmentName}
                                    name="Assignment Name"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="Assignment Name"
                                    placeholder="Enter your Assignment Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Assignment Notes"
                                    value={formObject.assignmentNotes}
                                    name="Last Name"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="Assignment Notes"
                                    placeholder="Assignment Notes/Description"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Due Date"
                                    value={formObject.dueDate}
                                    name="Due Date"
                                    onChange={handleInputChange}
                                    type="Date"
                                    defaultValue="2017-05-24"
                                    // className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="Enter Due Date"
                                />
                                <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
                                    Add Assignment
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
        </>
    )
}

export default AddAssignmentForm;