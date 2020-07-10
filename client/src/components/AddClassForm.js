import React, { useState } from "react";
import { Button, TextField, Container, Grid, Paper, Typography, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import API from "../utils/API";

function AddClassForm(props) {
    const { formObject, handleFormSubmit, handleInputChange, universityState } = props;

    const filter = createFilterOptions();

    const [open, setOpen] = useState(false);
    const [prefixValue, setPValue] = useState(null);
    const [numberValue, setNValue] = useState(null);
    const [numberState, setNumbers] = useState({
        numbers: []
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Paper>
            <Container maxWidth="sm">
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add Class
                    </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" gutterBottom>
                                        Add Class
                                </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        value={prefixValue}
                                        name="prefix"
                                        onChange={(event, newValue) => {
                                            if (typeof newValue === 'string') {
                                                setPValue({
                                                    prefix: newValue,
                                                });
                                                if (newValue !== null) {
                                                    formObject.prefix = (newValue.prefix);
                                                }
                                            } else if (newValue && newValue.inputValue) {
                                                // Create a new value from the user input
                                                API.Course.create({
                                                    prefix: newValue.inputValue,
                                                    university: universityState.university._id
                                                }).then(res => {
                                                    setPValue(res.data);
                                                    API.University.update(universityState.university._id, {
                                                        $push: { courses: res.data._id }
                                                    }).then(res => console.log(res))
                                                });
                                                if (newValue !== null) {
                                                    formObject.prefix = (newValue.inputValue);
                                                }
                                            } else {
                                                setPValue(newValue);
                                                if (newValue !== null) {
                                                    formObject.prefix = (newValue.prefix);
                                                }
                                            }
                                            if (newValue !== null && !newValue.inputValue) {
                                                API.Course.getById(newValue._id)
                                                    .then(res => {
                                                        var classNums = [];
                                                        res.data.numbers.forEach(number => {
                                                            classNums.push({ number });
                                                        });
                                                        setNumbers({ numbers: classNums });
                                                    });
                                            }
                                        }}
                                        filterOptions={(options, params) => {
                                            const filtered = filter(options, params);

                                            // Suggest the creation of a new value
                                            if (params.inputValue !== '') {
                                                filtered.push({
                                                    inputValue: params.inputValue,
                                                    prefix: `Add "${params.inputValue}"`,
                                                });
                                            }

                                            return filtered;
                                        }}
                                        selectOnFocus
                                        clearOnBlur
                                        handleHomeEndKeys
                                        id="course-prefix"
                                        options={universityState.university.courses}
                                        getOptionLabel={(option) => {
                                            // Value selected with enter, right from the input
                                            if (typeof option === 'string') {
                                                return option;
                                            }
                                            // Add "xxx" option created dynamically
                                            if (option.inputValue) {
                                                return option.inputValue;
                                            }
                                            // Regular option
                                            return option.prefix;
                                        }}
                                        renderOption={(option) => option.prefix}
                                        style={{ width: 150 }}
                                        freeSolo
                                        renderInput={(params) => (
                                            <TextField {...params} label="Class Prefix" variant="outlined" />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        value={numberValue}
                                        name="number"
                                        onChange={(event, newValue) => {
                                            if (typeof newValue === 'string') {
                                                setNValue({
                                                    number: newValue,
                                                });
                                                if (newValue !== null) {
                                                    formObject.number = (newValue.number);
                                                }
                                            } else if (newValue && newValue.inputValue) {
                                                // Create a new value from the user input
                                                setNValue({
                                                    number: newValue.inputValue,
                                                });
                                                console.log(prefixValue);
                                                API.Course.update(prefixValue._id, {
                                                    $push: { numbers: newValue.inputValue }
                                                }).then(res => console.log(res.data));
                                                if (newValue !== null) {
                                                    formObject.number = (newValue.inputValue);
                                                }
                                            } else {
                                                setNValue(newValue);
                                                if (newValue !== null) {
                                                    formObject.number = (newValue.number);
                                                }
                                            }
                                        }}
                                        filterOptions={(options, params) => {
                                            const filtered = filter(options, params);

                                            // Suggest the creation of a new value
                                            if (params.inputValue !== '') {
                                                filtered.push({
                                                    inputValue: params.inputValue,
                                                    number: `Add "${params.inputValue}"`,
                                                });
                                            }

                                            return filtered;
                                        }}
                                        selectOnFocus
                                        clearOnBlur
                                        handleHomeEndKeys
                                        id="course-number"
                                        options={numberState.numbers}
                                        getOptionLabel={(option) => {
                                            // Value selected with enter, right from the input
                                            if (typeof option === 'string') {
                                                return option;
                                            }
                                            // Add "xxx" option created dynamically
                                            if (option.inputValue) {
                                                return option.inputValue;
                                            }
                                            // Regular option
                                            return option.number;
                                        }}
                                        renderOption={(option) => option.number}
                                        style={{ width: 150 }}
                                        freeSolo
                                        renderInput={(params) => (
                                            <TextField {...params} label="Class Number" variant="outlined" />
                                        )}
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
                                        style={{ width: 120 }}
                                    />
                                    <TextField
                                        label="Room Number"
                                        value={formObject.roomNumber}
                                        name="roomNumber"
                                        onChange={handleInputChange}
                                        as="input"
                                        type="text"
                                        style={{ width: 120 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="secondary" type="submit" onClick={handleFormSubmit}>
                                        Add Class
                            </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </Paper>

    )
}

export default AddClassForm;