import React, { useState } from "react";
import { Button, TextField, Container, Grid, Paper, Typography, Dialog, DialogActions, DialogContent } from '@material-ui/core';

function AddAssignmentForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Paper>
                <Container maxWidth="sm">
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        Add Assignment
                    </Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogContent>
                            <form>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" gutterBottom>
                                            Add Assignment
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Assignment Name"
                                            value={formObject.name}
                                            name="name"
                                            onChange={handleInputChange}
                                            as="input"
                                            type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Assignment Notes"
                                            value={formObject.notes}
                                            name="notes"
                                            onChange={handleInputChange}
                                            as="input"
                                            type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
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
                                    </Grid>
                                    <Button variant="contained" color="secondary" type="submit" onClick={handleFormSubmit}>
                                        Add Assignment
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
        </>
    )
}

export default AddAssignmentForm;