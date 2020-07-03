import React from "react";
import { Button, TextField, Container, Grid, Paper, Typography } from '@material-ui/core';
import { KeyboardTimePicker } from '@material-ui/pickers';

function AddClassForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

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
                                label="Class Name"
                                value={formObject.className}
                                name="Class Name"
                                onChange={handleInputChange}
                                as="input"
                                type="Class Name"
                                placeholder="Enter your Class"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Class Number"
                                value={formObject.classNumber}
                                name="Class Number"
                                onChange={handleInputChange}
                                as="input"
                                type="Class Number"
                                placeholder="Class Number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Professor Name"
                                value={formObject.professor}
                                name="Professor Name"
                                onChange={handleInputChange}
                                as="input"
                                type="Professor Name"
                                placeholder="Enter Professor Name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Time picker"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Room Number"
                                value={formObject.roomNumber}
                                name="Room Number"
                                onChange={handleInputChange}
                                as="input"
                                type="Room Number"
                                placeholder="Enter Room Number"
                            />
                            <TextField
                                label="Building"
                                value={formObject.building}
                                name="Building"
                                onChange={handleInputChange}
                                as="input"
                                type="Building"
                                placeholder="Enter Building"
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