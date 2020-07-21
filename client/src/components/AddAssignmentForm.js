import React, { useState } from "react";
import { IconButton, Button, TextField, Grid, Paper, Typography, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
            <IconButton aria-label="add" onClick={handleClickOpen}>
                <AddCircleIcon color="secondary" style={{ fontSize: "65px" }} /></IconButton>
            <Paper>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12} style={{ backgroundColor: "#2c387e", color: "white", width: "100%", marginBottom:"15px", textAlign: "center" }}>
                                    <Typography variant="h4" gutterBottom style={{ fontFamily: 'Varta, sans-serif' }}>
                                        Add Assignment
                                </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        label="Assignment Name"
                                        value={formObject.name}
                                        name="name"
                                        onChange={handleInputChange}
                                        as="input"
                                        type="text"
                                        style={{ fontFamily: 'Varta, sans-serif' }}
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
                                        multiline
                                        rows={4}
                                        style={{ fontFamily: 'Varta, sans-serif' }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
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
                                <Button variant="contained" color="secondary" type="submit" onClick={handleFormSubmit} style={{ fontFamily: 'Varta, sans-serif' }}>
                                    Add Assignment
                                </Button>
                            </Grid>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" style={{ fontFamily: 'Varta, sans-serif' }}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        </>
    )
}

export default AddAssignmentForm;