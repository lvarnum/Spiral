import React from "react";
import { Container, Paper, Typography, Grid, Button } from "@material-ui/core";




function Home() {

    return (
            <Paper>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h2" align="center" gutterBottom>
                                Spiral
                            </Typography>
                            <Typography variant="h4" align="center" gutterBottom>
                                Student class organizer, assignment planner, and university community forum application.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Button variant="contained" color="secondary" type="submit">
                        Login
                    </Button>

                    <Button variant="contained" color="secondary" type="submit">
                        Signup
                    </Button>

                </Container>
            </Paper>
    )
}

export default Home;