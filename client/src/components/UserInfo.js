import React from 'react'
import {
    Grid, Typography, Paper, FormControl, InputLabel, Select, MenuItem, IconButton, Container
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

function UserInfo(props) {
    const { infoState, handleInputChange, handleSubmit, formObject, handleClassDelete, handlePostDelete } = props;

    return (
        <Container maxWidth="sm">
            <Paper style={{ padding: "15px", border: "solid 2px #2c387e" }}>
                <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center">
                    <Grid item xs={12} style={{ borderBottom: "solid 2px #2c387e", marginBottom: "15px" }}>
                        <Typography variant="h4" style={{ fontFamily: 'Varta, sans-serif' }}>User Info</Typography>
                    </Grid >
                    <Grid item xs={12}>
                        <Typography variant="body1" style={{ fontFamily: 'Varta, sans-serif' }}><b>First Name: </b>{props.user.firstName}</Typography>
                    </Grid >
                    <Grid item xs={12}>
                        <Typography variant="body1" style={{ fontFamily: 'Varta, sans-serif' }}><b>Last Name: </b>{props.user.lastName}</Typography>
                    </Grid >
                    <Grid item xs={12}>
                        <Typography variant="body1" style={{ fontFamily: 'Varta, sans-serif' }}><b>University: </b>{infoState.university}</Typography>
                    </Grid >
                    <Grid item xs={12}>
                        <Typography variant="body1" style={{ fontFamily: 'Varta, sans-serif' }}><b>Session: </b>{infoState.session}</Typography>
                    </Grid >
                    <Grid item xs={12}>
                        <Typography variant="body1" style={{ fontFamily: 'Varta, sans-serif' }}><b>Update Session: </b></Typography>
                        <FormControl>
                            <InputLabel style={{ fontFamily: 'Varta, sans-serif' }}>Session</InputLabel>
                            <Select
                                name="session"
                                id="session-select"
                                style={{ width: 200, fontFamily: 'Varta, sans-serif' }}
                                value={formObject.session}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="Spring" style={{ fontFamily: 'Varta, sans-serif' }}>Spring</MenuItem>
                                <MenuItem value="Summer" style={{ fontFamily: 'Varta, sans-serif' }}>Summer</MenuItem>
                                <MenuItem value="Fall" style={{ fontFamily: 'Varta, sans-serif' }}>Fall</MenuItem>
                                <MenuItem value="Winter" style={{ fontFamily: 'Varta, sans-serif' }}>Winter</MenuItem>
                            </Select>
                        </FormControl>
                        <IconButton aria-label="check" style={{ marginLeft: "10px" }}
                            onClick={handleSubmit}>
                            <CheckIcon style={{ color: "green" }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
            <Paper style={{ padding: "15px", marginTop: "30px", marginBottom: "30px", border: "solid 2px #2c387e" }}>
                <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center">
                    <Grid item xs={12} style={{ borderBottom: "solid 2px #2c387e", marginBottom: "15px" }}>
                        <Typography variant="h4" style={{ fontFamily: 'Varta, sans-serif' }}>Classes</Typography>
                    </Grid >
                    {infoState.scheduleItems.map(item => (
                        <Grid item xs={12}
                            style={{ backgroundColor: "#2c387e", color: "white", width: "100%", marginBottom: "5px", borderRadius: "5px" }}>
                            <Typography variant="h6" style={{ fontFamily: 'Varta, sans-serif' }}>{item.course}
                            </Typography>
                            <IconButton aria-label="delete" style={{ backgroundColor: "white", marginTop: "5px", marginBottom: "5px" }}
                                onClick={handleClassDelete.bind(this, item._id, item.assignments)}>
                                <DeleteIcon style={{ color: "red" }} />
                            </IconButton>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
            <Paper style={{ padding: "15px", border: "solid 2px #2c387e" }}>
                <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center">
                    <Grid item xs={12} style={{ borderBottom: "solid 2px #2c387e", marginBottom: "15px" }}>
                        <Typography variant="h4" style={{ fontFamily: 'Varta, sans-serif' }}>Posts</Typography>
                    </Grid >
                    {infoState.posts.map(item => (
                        <Grid item xs={12}
                            style={{ backgroundColor: "#2c387e", color: "white", width: "100%", marginBottom: "5px", borderRadius: "5px" }}>
                            <Typography variant="h6" style={{ fontFamily: 'Varta, sans-serif' }}>{item.title}
                            </Typography>
                            <IconButton aria-label="delete" style={{ backgroundColor: "white", marginTop: "5px", marginBottom: "5px" }}
                                onClick={handlePostDelete.bind(this, item._id)}>
                                <DeleteIcon style={{ color: "red" }} />
                            </IconButton>
                        </Grid>
                    ))}
                </Grid>
            </Paper >
        </Container >
    )
};

export default UserInfo
