import React from "react";
import { Container, Grid, Button, TextField, Paper, Typography } from '@material-ui/core';

function LoginForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <>
            <Paper style={{ padding: "30px", border: "solid 2px #2c387e", marginTop: "120px" }}>
                <Container maxWidth="sm">
                    <form>
                        <Grid container spacing={3} direction="column" align="center" justify="center" alignItems="center">
                            <Grid item xs={12} style={{ backgroundColor: "#2c387e", color: "white", width: "100%" }}>
                                <Typography variant="h4" gutterBottom>
                                    Login
                                </Typography>
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
                                <Button variant="contained" color="secondary" type="submit" onClick={handleFormSubmit}>
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="/signup" style={{ textDecoration: "none", color: "#2c387e" }}>Or Signup</a>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
        </>
    )
}

export default LoginForm;