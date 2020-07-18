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
            <Paper style={{ padding: "30px", border: "solid 2px #2c387e", marginTop: "30px" }}>
                <Container maxWidth="sm">
                    <form>
                        <Grid container spacing={3} direction="column" align="center" justify="center" alignItems="center">
                            <Grid item xs={12} style={{ backgroundColor: "#2c387e", color: "white", width: "100%" }}>
                                <Typography variant="h4" gutterBottom style={{ fontFamily: 'Varta, sans-serif' }}>
                                    Signup
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="First Name"
                                    value={formObject.firstName}
                                    name="firstName"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="text"
                                    placeholder="Enter your First Name"
                                    style={{ fontFamily: 'Varta, sans-serif' }}
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
                                    style={{ fontFamily: 'Varta, sans-serif' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Email"
                                    value={formObject.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="email"
                                    placeholder="Enter your Email"
                                    style={{ fontFamily: 'Varta, sans-serif' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Password"
                                    value={formObject.password}
                                    name="password"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="password"
                                    placeholder="Enter your password"
                                    style={{ fontFamily: 'Varta, sans-serif' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <InputLabel style={{ fontFamily: 'Varta, sans-serif' }}>Session</InputLabel>
                                    <Select
                                        required
                                        name="session"
                                        id="session-select"
                                        style={{ width: 200 }}
                                        onChange={handleInputChange}
                                        style={{ fontFamily: 'Varta, sans-serif' }}
                                    >
                                        <MenuItem value="Spring" style={{ fontFamily: 'Varta, sans-serif' }}>Spring</MenuItem>
                                        <MenuItem value="Summer" style={{ fontFamily: 'Varta, sans-serif' }}>Summer</MenuItem>
                                        <MenuItem value="Fall" style={{ fontFamily: 'Varta, sans-serif' }}>Fall</MenuItem>
                                        <MenuItem value="Winter" style={{ fontFamily: 'Varta, sans-serif' }}>Winter</MenuItem>
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
                                            if (newValue !== null) {
                                                formObject.university = (newValue._id);
                                            }
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
                                            <TextField {...params} label="University" variant="outlined" style={{ textAlign: "left" }} style={{ fontFamily: 'Varta, sans-serif' }} />
                                        )}
                                    />
                                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                        <form onSubmit={handleSubmit}>
                                            <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }} style={{ fontFamily: 'Varta, sans-serif' }}>
                                                Add a new University</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText style={{ fontFamily: 'Varta, sans-serif' }}>
                                                    Can't find your University? Please, add it!
                                                </DialogContentText>
                                                <TextField
                                                    required
                                                    autoFocus
                                                    margin="dense"
                                                    id="name"
                                                    value={dialogValue.name}
                                                    onChange={(event) => setDialogValue({ ...dialogValue, name: event.target.value })}
                                                    label="Name"
                                                    type="text"
                                                    style={{ marginBottom: "15px" }}
                                                    style={{ fontFamily: 'Varta, sans-serif' }}
                                                />
                                                <Autocomplete
                                                    id="state"
                                                    margin="dense"
                                                    inputValue={inputValue}
                                                    style={{ fontFamily: 'Varta, sans-serif' }}
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
                                                    renderInput={(params) => <TextField {...params} label="State" variant="outlined" style={{ fontFamily: 'Varta, sans-serif' }}/>}
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose} color="primary" style={{ fontFamily: 'Varta, sans-serif' }}>
                                                    Cancel
                                                </Button>
                                                <Button type="submit" color="primary" style={{ fontFamily: 'Varta, sans-serif' }}>
                                                    Add
                                                </Button>
                                            </DialogActions>
                                        </form>
                                    </Dialog>
                                </>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="secondary" type="submit" onClick={handleFormSubmit} style={{ fontFamily: 'Varta, sans-serif' }}>
                                    Signup
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="/login" style={{ textDecoration: "none", color: "#2c387e" }} style={{ fontFamily: 'Varta, sans-serif' }}>Or Login</a>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
        </>
    )
}

export default SignupForm;