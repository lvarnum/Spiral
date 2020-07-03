import React, { useState, useEffect } from "react";
import { Button, TextField, Container, Grid, Paper, Typography, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import API from "../utils/API";

function SignupForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    const [universityState, setUniversities] = useState({
        universities: []
    });

    useEffect(() => {
        API.University.getAll()
            .then(res => {
                setUniversities(res.data);
            })
            .catch(err => console.log(err));
    }, []);

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
                                    name="First Name"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="First Name"
                                    placeholder="Enter your First Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Last Name"
                                    value={formObject.lastName}
                                    name="Last Name"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="Last Name"
                                    placeholder="Enter your Last Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <InputLabel>Session</InputLabel>
                                    <Select
                                        id="session-select"
                                        style={{width: 200}}
                                    >
                                        <MenuItem value="Spring">Spring</MenuItem>
                                        <MenuItem value="Summer">Summer</MenuItem>
                                        <MenuItem value="Fall">Fall</MenuItem>
                                        <MenuItem value="Winter">Winter</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    id="states"
                                    options={[
                                        "AL",
                                        "AK",
                                        "AS",
                                        "AZ",
                                        "AR",
                                        "CA",
                                        "CO",
                                        "CT",
                                        "DE",
                                        "DC",
                                        "FM",
                                        "FL",
                                        "GA",
                                        "GU",
                                        "HI",
                                        "ID",
                                        "IL",
                                        "IN",
                                        "IA",
                                        "KS",
                                        "KY",
                                        "LA",
                                        "ME",
                                        "MH",
                                        "MD",
                                        "MA",
                                        "MI",
                                        "MN",
                                        "MS",
                                        "MO",
                                        "MT",
                                        "NE",
                                        "NV",
                                        "NH",
                                        "NJ",
                                        "NM",
                                        "NY",
                                        "NC",
                                        "ND",
                                        "MP",
                                        "OH",
                                        "OK",
                                        "OR",
                                        "PW",
                                        "PA",
                                        "PR",
                                        "RI",
                                        "SC",
                                        "SD",
                                        "TN",
                                        "TX",
                                        "UT",
                                        "VT",
                                        "VI",
                                        "VA",
                                        "WA",
                                        "WV",
                                        "WI",
                                        "WY"
                                    ]}
                                    getOptionLabel={(option) => option}
                                    style={{ width: 100 }}
                                    renderInput={(params) => <TextField {...params} label="State" variant="outlined" />}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Autocomplete
                                    // onChange={(event, newValue) => {
                                    //     if (typeof newValue === 'string') {
                                    //         setValue({
                                    //             title: newValue,
                                    //         });
                                    //     } else if (newValue && newValue.inputValue) {
                                    //         // Create a new value from the user input
                                    //         setValue({
                                    //             title: newValue.inputValue,
                                    //         });
                                    //     } else {
                                    //         setValue(newValue);
                                    //     }
                                    // }}
                                    filterOptions={(options, params) => {
                                        const filtered = filter(options, params);

                                        // Suggest the creation of a new value
                                        if (params.inputValue !== '') {
                                            filtered.push({
                                                inputValue: params.inputValue,
                                                name: `Add "${params.inputValue}"`,
                                            });
                                        }

                                        return filtered;
                                    }}
                                    selectOnFocus
                                    clearOnBlur
                                    handleHomeEndKeys
                                    id="free-solo-with-text-demo"
                                    options={universityState.universities}
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
                                        return option.name;
                                    }}
                                    renderOption={(option) => option.name}
                                    style={{ width: 300 }}
                                    freeSolo
                                    renderInput={(params) => (
                                        <TextField {...params} label="University Name" variant="outlined" />
                                    )}
                                />
                            </Grid> */}
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