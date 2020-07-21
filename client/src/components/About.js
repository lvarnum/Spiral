import React from "react";
import { Container, Paper, Typography, Grid } from "@material-ui/core";
import Schedule from "../utils/images/schedule.png";
import Assignments from "../utils/images/assignments.png";
import Community from "../utils/images/community.png";

function About() {

    return (
        <Paper style={{ padding: "30px", border: "solid 2px #2c387e", marginBottom: "50px" }}>
            <Container maxWidth="sm">
                <Grid container spacing={3} direction="column" align="center" justify="center" alignItems="center"
                    style={{ marginBottom: "50px" }}>
                    <Grid item xs={12} style={{ backgroundColor: "#2c387e", color: "white", width: "100%", borderRadius: "5px" }}>
                        <Typography variant="h2" align="center" gutterBottom
                            style={{ fontFamily: 'Varta, sans-serif' }}>
                            Welcome to Spiral!
                        </Typography>
                        <Typography variant="h6" align="center" gutterBottom
                            style={{ fontFamily: 'Varta, sans-serif' }}>
                            - The best academic organizer for everything on your student calendar -
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4} direction="column" align="center" justify="center">
                    <Grid item xs={12} style={{ borderBottom: "solid 2px #2c387e", borderTop: "solid 2px #2c387e" }}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontFamily: 'Varta, sans-serif' }}>
                            Manage Your Class Schedule
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={Schedule} alt="Schedule" style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} style={{ borderBottom: "solid 2px #2c387e", borderTop: "solid 2px #2c387e" }}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontFamily: 'Varta, sans-serif' }}>
                            Keep Track of Your Assignments
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={Assignments} alt="Assignments" style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} style={{ borderBottom: "solid 2px #2c387e", borderTop: "solid 2px #2c387e" }}>
                        <Typography variant="h4" align="center" gutterBottom style={{ fontFamily: 'Varta, sans-serif' }}>
                            Engage with Your Academic Community
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={Community} alt="Community" style={{ width: "100%" }} />
                    </Grid>
                </Grid>
            </Container>
            <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center"
                style={{ marginTop: "50px", backgroundColor: "#2c387e", color: "white", width: "100%", borderRadius: "5px" }}>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center" gutterBottom style={{ fontFamily: 'Varta, sans-serif' }}>
                        Developed By:
                        </Typography>
                </Grid>
                <Grid item xs={12} style={{ borderBottom: "solid 2px white" }}>
                    <Typography variant="body1" align="center" gutterBottom style={{ fontFamily: 'Varta, sans-serif' }}>
                        Laynah Varnum:
                        </Typography>
                    <a href="https://github.com/lvarnum" target="_b" style={{ color: "#ffc400", marginLeft: "5px" }}>
                        https://github.com/lvarnum</a>
                </Grid>
                <Grid item xs={12} style={{ borderBottom: "solid 2px white" }}>
                    <Typography variant="body1" align="center" gutterBottom style={{ fontFamily: 'Varta, sans-serif' }}>
                        Joanna Pino:
                        </Typography>
                    <a href="https://github.com/jpino7" target="_b" style={{ color: "#ffc400", marginLeft: "5px" }}>
                        https://github.com/jpino7</a>
                </Grid>
                <Grid item xs={12} style={{ borderBottom: "solid 2px white" }}>
                    <Typography variant="body1" align="center" gutterBottom style={{ fontFamily: 'Varta, sans-serif' }}>
                        Veronica Torres:
                        </Typography>
                    <a href="https://github.com/Drapeto" target="_b" style={{ color: "#ffc400", marginLeft: "5px" }}>
                        https://github.com/Drapeto</a>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" align="center" gutterBottom style={{ fontFamily: 'Varta, sans-serif' }}>
                        Jeremy Nelson:
                        </Typography>
                    <a href="https://github.com/Swif242" target="_b" style={{ color: "#ffc400", marginLeft: "5px" }}>
                        https://github.com/Swif242</a>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default About;

