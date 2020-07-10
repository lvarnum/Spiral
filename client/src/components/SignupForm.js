import React, { useState } from "react";
import {
    Button, TextField, Container, Grid, Paper, Typography, FormControl, Select, MenuItem, InputLabel, Dialog, DialogTitle,
    DialogContent, DialogContentText, DialogActions
} from '@material-ui/core';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import API from "../utils/API";

function SignupForm(props) {
    const { formObject, handleFormSubmit, handleInputChange, universityState } = props;

    const filter = createFilterOptions();
    
    const [value, setValue] = useState(null);
    const [open, toggleOpen] = useState(false);
    const [dialogValue, setDialogValue] = useState({
        name: '',
        state: '',
    });
    const [inputValue, setInputValue] = useState('');

    const handleClose = () => {
        setDialogValue({
            name: '',
            state: '',
        });

        toggleOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({
            name: dialogValue.name,
            state: dialogValue.state,
        });

        API.University.create({
            name: dialogValue.name,
            state: dialogValue.state
        });

        handleClose();
    };

    return (
        <>
            <Paper>
                <Container maxWidth="sm">
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h4" gutterBottom>
                                    Signup
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="First Name"
                                    value={formObject.firstName}
                                    name="firstName"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="text"
                                    placeholder="Enter your First Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Last Name"
                                    value={formObject.lastName}
                                    name="lastName"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="text"
                                    placeholder="Enter your Last Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    value={formObject.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="email"
                                    placeholder="Enter your Email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    value={formObject.password}
                                    name="password"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <InputLabel>Session</InputLabel>
                                    <Select
                                        name="session"
                                        id="session-select"
                                        style={{ width: 200 }}
                                        onChange={handleInputChange}
                                    >
                                        <MenuItem value="Spring">Spring</MenuItem>
                                        <MenuItem value="Summer">Summer</MenuItem>
                                        <MenuItem value="Fall">Fall</MenuItem>
                                        <MenuItem value="Winter">Winter</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <>
                                    <Autocomplete
                                        value={value}
                                        name="university"
                                        onChange={(event, newValue) => {
                                            if (typeof newValue === 'string') {
                                                // timeout to avoid instant validation of the dialog's form.
                                                setTimeout(() => {
                                                    toggleOpen(true);
                                                    setDialogValue({
                                                        name: newValue,
                                                        state: '',
                                                    });
                                                });
                                            } else if (newValue && newValue.inputValue) {
                                                toggleOpen(true);
                                                setDialogValue({
                                                    name: newValue.inputValue,
                                                    state: '',
                                                });
                                            } else {
                                                setValue(newValue);
                                            }
                                            formObject.university = (newValue._id);
                                        }}
                                        filterOptions={(options, params) => {
                                            const filtered = filter(options, params);

                                            if (params.inputValue !== '') {
                                                filtered.push({
                                                    inputValue: params.inputValue,
                                                    name: `Add "${params.inputValue}"`,
                                                });
                                            }

                                            return filtered;
                                        }}
                                        id="university-options"
                                        options={universityState.universities}
                                        getOptionLabel={(option) => {
                                            // e.g value selected with enter, right from the input
                                            if (typeof option === 'string') {
                                                return option;
                                            }
                                            if (option.inputValue) {
                                                return option.inputValue;
                                            }
                                            return option.name;
                                        }}
                                        selectOnFocus
                                        clearOnBlur
                                        handleHomeEndKeys
                                        renderOption={(option) => option.name}
                                        style={{ width: 300 }}
                                        freeSolo
                                        renderInput={(params) => (
                                            <TextField {...params} label="University" variant="outlined" />
                                        )}
                                    />
                                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                        <form onSubmit={handleSubmit}>
                                            <DialogTitle id="form-dialog-title">Add a new University</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Can't find your University? Please, add it!
                                                </DialogContentText>
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id="name"
                                                    value={dialogValue.name}
                                                    onChange={(event) => setDialogValue({ ...dialogValue, name: event.target.value })}
                                                    label="Name"
                                                    type="text"
                                                />
                                                <Autocomplete
                                                    id="state"
                                                    margin="dense"
                                                    inputValue={inputValue}
                                                    options={[
                                                        { name: "AL" },
                                                        { name: "AK" },
                                                        { name: "AS" },
                                                        { name: "AZ" },
                                                        { name: "AR" },
                                                        { name: "CA" },
                                                        { name: "CO" },
                                                        { name: "CT" },
                                                        { name: "DE" },
                                                        { name: "DC" },
                                                        { name: "FM" },
                                                        { name: "FL" },
                                                        { name: "GA" },
                                                        { name: "GU" },
                                                        { name: "HI" },
                                                        { name: "ID" },
                                                        { name: "IL" },
                                                        { name: "IN" },
                                                        { name: "IA" },
                                                        { name: "KS" },
                                                        { name: "KY" },
                                                        { name: "LA" },
                                                        { name: "ME" },
                                                        { name: "MH" },
                                                        { name: "MD" },
                                                        { name: "MA" },
                                                        { name: "MI" },
                                                        { name: "MN" },
                                                        { name: "MS" },
                                                        { name: "MO" },
                                                        { name: "MT" },
                                                        { name: "NE" },
                                                        { name: "NV" },
                                                        { name: "NH" },
                                                        { name: "NJ" },
                                                        { name: "NM" },
                                                        { name: "NY" },
                                                        { name: "NC" },
                                                        { name: "ND" },
                                                        { name: "MP" },
                                                        { name: "OH" },
                                                        { name: "OK" },
                                                        { name: "OR" },
                                                        { name: "PW" },
                                                        { name: "PA" },
                                                        { name: "PR" },
                                                        { name: "RI" },
                                                        { name: "SC" },
                                                        { name: "SD" },
                                                        { name: "TN" },
                                                        { name: "TX" },
                                                        { name: "UT" },
                                                        { name: "VT" },
                                                        { name: "VI" },
                                                        { name: "VA" },
                                                        { name: "WA" },
                                                        { name: "WV" },
                                                        { name: "WI" },
                                                        { name: "WY" }
                                                    ]}
                                                    onInputChange={(event, newInputValue) => {
                                                        setInputValue(newInputValue);
                                                        setDialogValue({ ...dialogValue, state: newInputValue });

                                                    }}
                                                    getOptionLabel={(option) => option.name}
                                                    style={{ width: 130 }}
                                                    renderInput={(params) => <TextField {...params} label="State" variant="outlined" />}
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose} color="primary">
                                                    Cancel
                                                </Button>
                                                <Button type="submit" color="primary">
                                                    Add
                                                </Button>
                                            </DialogActions>
                                        </form>
                                    </Dialog>
                                </>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
                                    Signup
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
        </>
    )
}

export default SignupForm;