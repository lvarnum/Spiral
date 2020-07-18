import React from 'react'
import {
    Grid, Typography, Paper, FormControl, InputLabel, Select, MenuItem, IconButton,
    List, ListItem, Divider, ListItemText, Container
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

function UserInfo(props) {
    const { infoState, handleInputChange, handleSubmit, formObject, handleClassDelete, handlePostDelete } = props;

    return (
        <Container maxWidth="sm">
            <Paper style={{ padding: "15px", border: "solid 2px #2c387e" }}>
                <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center">
                    <Grid item xs={12}>
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
                                style={{ width: 200 }}
                                value={formObject.session}
                                onChange={handleInputChange}
                                style={{ fontFamily: 'Varta, sans-serif' }}
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
                    <Grid item xs={12}>
                        <Typography variant="h4" style={{ fontFamily: 'Varta, sans-serif' }}>Classes</Typography>
                    </Grid >
                    <Grid item xs={12}>
                        <List>
                            {infoState.scheduleItems.map(item => (
                                <>
                                    <ListItem alignItems="flex-start" style={{ backgroundColor: "#2c387e" }}>
                                        <ListItemText style={{ color: "white" }}>{item.course} </ListItemText>
                                        <IconButton aria-label="delete" style={{ backgroundColor: "white", marginLeft: "20px" }}
                                            onClick={handleClassDelete.bind(this, item._id, item.assignments)}>
                                            <DeleteIcon style={{ color: "red" }} />
                                        </IconButton>
                                    </ListItem>
                                    <Divider variant="middle" component="li" />
                                </>
                            )
                            )}
                        </List>
                    </Grid>
                </Grid>
            </Paper>
            <Paper style={{ padding: "15px", border: "solid 2px #2c387e" }}>
                <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h4" style={{ fontFamily: 'Varta, sans-serif' }}>Posts</Typography>
                    </Grid >
                    <Grid item xs={12}>
                        <List>
                            {infoState.posts.map(item => (
                                <>
                                    <ListItem alignItems="flex-start" style={{ backgroundColor: "#2c387e" }}>
                                        <ListItemText style={{ color: "white" }}>{item.title}</ListItemText>
                                        <IconButton aria-label="delete" style={{ backgroundColor: "white", marginLeft: "20px" }}
                                            onClick={handlePostDelete.bind(this, item._id)}>
                                            <DeleteIcon style={{ color: "red" }} />
                                        </IconButton>
                                    </ListItem>
                                    <Divider variant="middle" component="li" />
                                </>
                            )
                            )}
                        </List>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
};

export default UserInfo
