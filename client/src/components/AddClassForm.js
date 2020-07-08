import React from "react";
import { Button, TextField, Container, Grid, Paper, Typography } from '@material-ui/core';

function AddClassForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <Paper>
            <Container maxWidth="sm">
                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>
                                Add Class
                                </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Class Prefix"
                                value={formObject.prefix}
                                name="prefix"
                                onChange={handleInputChange}
                                as="input"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Class Number"
                                value={formObject.number}
                                name="number"
                                onChange={handleInputChange}
                                as="input"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Professor Name"
                                value={formObject.professor}
                                name="professor"
                                onChange={handleInputChange}
                                as="input"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="start-time"
                                label="Start Time"
                                type="time"
                                value={formObject.startTime}
                                name="startTime"
                                onChange={handleInputChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="end-time"
                                label="End Time"
                                type="time"
                                value={formObject.endTime}
                                name="endTime"
                                onChange={handleInputChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Building"
                                value={formObject.building}
                                name="building"
                                onChange={handleInputChange}
                                as="input"
                                type="text"
                            />
                            <TextField
                                label="Room Number"
                                value={formObject.roomNumber}
                                name="roomNumber"
                                onChange={handleInputChange}
                                as="input"
                                type="text"
                            />
                            <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
                                Add Class
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Paper>

    )
}

export default AddClassForm;