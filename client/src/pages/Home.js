import React from "react";
import { Container, Paper, Typography, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Logo from "../utils/images/SpiralLogo.png"

function Home(props) {
    const { user } = props;
    const styles = {
        buttons: {
            textAlign: "center"
        }
    };
    return (
            <Paper>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h2" align="center" gutterBottom>
                            <img className="logo" src={Logo} alt="Logo" />
                            </Typography>
                            <Typography variant="h4" align="center" gutterBottom>
                                Student class organizer, assignment planner, and university community forum application.
                            </Typography>
                        </Grid>
                    </Grid>

                    {user.email ?
                        <>

                        </>
                        :
                        <>
                        <div id="btnRow" style={styles.buttons}>
                            <Button style={{marginRight:'1em', marginBottom:"1em"}}component={Link} to="/login" variant="contained" color="secondary" type="submit">
                                Login
                        </Button>

                            <Button style={{marginBottom:"1em"}} component={Link} to="/signup" variant="contained" color="secondary" type="submit">
                                Signup
                        </Button>
                        </div>
                        </>
                    }



                </Container>
            </Paper>
    )
}

export default Home;