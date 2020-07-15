import React, { useState }from 'react'
import { Button, TextField, Container, Grid, Paper, Typography, Dialog, DialogActions, DialogContent } from '@material-ui/core';

function UserInfo(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
             <Paper>
                <Container maxWidth="sm">
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        Add User
                    </Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogContent>
                            <form>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" gutterBottom>
                                            Add User
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
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Email"
                                            value={formObject.email}
                                            name="email"
                                            onChange={handleInputChange}
                                            as="input"
                                            type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="University"
                                            value={formObject.university}
                                            name="university"
                                            onChange={handleInputChange}
                                            as="input"
                                            type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Session"
                                            value={formObject.session}
                                            name="session"
                                            onChange={handleInputChange}
                                            as="input"
                                            type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Classes"
                                            value={formObject.classes}
                                            name="classes"
                                            onChange={handleInputChange}
                                            as="input"
                                            type="text"
                                        />
                                    </Grid>
                                    {/* <Grid item xs={12}>
                                        <TextField
                                            id="date"
                                            label="Due Date"
                                            name="due"
                                            value={formObject.due}
                                            type="date"
                                            onChange={handleInputChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid> */}
                                    <Button variant="contained" color="secondary" type="submit" onClick={handleFormSubmit}>
                                        Add User
                                </Button>
                                </Grid>
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Close
                        </Button>
                        </DialogActions>
                    </Dialog>
                </Container>
            </Paper>
        </div>
    )
}

export default UserInfo
