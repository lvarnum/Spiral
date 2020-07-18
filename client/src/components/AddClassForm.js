import React, { useState } from "react";
import {
    Button, IconButton, TextField, Grid, Paper, Typography, Dialog, DialogActions, DialogContent, Checkbox, FormControlLabel,
    FormControl, FormGroup, FormLabel
} from '@material-ui/core';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import API from "../utils/API";

function AddClassForm(props) {
    const { formObject, handleFormSubmit, handleInputChange, universityState } = props;

    const filter = createFilterOptions();

    const [open, setOpen] = useState(false);
    const [prefixValue, setPValue] = useState(null);
    const [numberValue, setNValue] = useState(null);
    const [numberState, setNumbers] = useState({
        numbers: []
    });
    const [checked, setChecked] = useState(false);
    const [days, setDays] = useState({
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false
    })

    const handleOnlineChange = (event) => {
        setChecked(event.target.checked);
        if (event.target.checked) {
            formObject.building = "Online"
        }
    };

    const handleChange = (event) => {
        setDays({ ...days, [event.target.name]: event.target.checked });
        if (event.target.checked) {
            formObject.days.push(event.target.name);
        }
        else {
            formObject.days.filter(day => day !== event.target.name);
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        setPValue('');
        setNValue('');
        setDays({ Monday: false, Tuesday: false, Wednesday: false, Thursday: false, Friday: false, Saturday: false, Sunday: false })
    };

    return (
        <>
            <IconButton aria-label="add" onClick={handleClickOpen} >
                <AddCircleIcon style={{ fontSize: "65px" }} color="secondary" /></IconButton>
            <Paper>
                <Dialog open={open} onClose={handleClose} aria-labelledby="add-class-form">
                    <DialogContent>
                        <form onSubmit={handleFormSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} style={{ backgroundColor: "#2c387e", color: "white", width: "100%", marginBottom:"10px", textAlign: "center" }}>
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
                                        required
                                        label="Professor Name"
                                        value={formObject.professor}
                                        name="professor"
                                        onChange={handleInputChange}
                                        as="input"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checked}
                                                onChange={handleOnlineChange}
                                                name="online"
                                                color="primary"
                                            />
                                        }
                                        label="Online"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Class Days</FormLabel>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={days.Monday} onChange={handleChange} name="Monday" color="primary" />}
                                                label="Monday"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={days.Tuesday} onChange={handleChange} name="Tuesday" color="primary" />}
                                                label="Tuesday"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={days.Wednesday} onChange={handleChange} name="Wednesday" color="primary" />}
                                                label="Wednesday"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={days.Thursday} onChange={handleChange} name="Thursday" color="primary" />}
                                                label="Thursday"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={days.Friday} onChange={handleChange} name="Friday" color="primary" />}
                                                label="Friday"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={days.Saturday} onChange={handleChange} name="Saturday" color="primary" />}
                                                label="Saturday"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={days.Sunday} onChange={handleChange} name="Sunday" color="primary" />}
                                                label="Sunday"
                                            />
                                        </FormGroup>
                                    </FormControl>
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
                                        style={{ width: 200 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Room"
                                        value={formObject.roomNumber}
                                        name="roomNumber"
                                        onChange={handleInputChange}
                                        as="input"
                                        type="text"
                                        style={{ width: 100 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="secondary" type="submit" onClick={handleClick}>
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
            </Paper>
        </>

    )
}

export default AddClassForm;