import React, { useState } from "react";
import { Container, Paper, Typography, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Logo from "../utils/images/SpiralLogo.png";
import { About } from "../components";

function Home() {
    const [displayState, display] = useState(false);

    const handleShow = () => {
        if (displayState) {
            display(false);
        }
        else {
            display(true);
        }
    }


    return (
        <>
            <Paper style={{ padding: "30px", border: "solid 2px #2c387e", marginTop: "80px", marginBottom: "50px" }}>
                <Container maxWidth="sm">
                    <Grid container spacing={3} direction="column" align="center" justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h2" align="center" gutterBottom>
                                <img src={Logo} alt="Logo" style={{ width: "100%" }} />
                            </Typography>
                            <Typography variant="h4" align="center" gutterBottom style={{ fontFamily: 'Varta, sans-serif' }}>
                                - A Student Organizer -
                            </Typography>
                        </Grid>


                        <Grid item xs={12}>
                            <Button component={Link} to="/login" variant="contained" color="secondary" type="submit">
                                Login
                        </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button component={Link} to="/signup" variant="contained" color="secondary" type="submit">
                                Signup
                        </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="primary" onClick={handleShow}>Learn More</Button>
                        </Grid>
                    </Grid>
                </Container >
            </Paper >
            {displayState === true &&
                <About />
            }
        </>
    )
}

export default Home;