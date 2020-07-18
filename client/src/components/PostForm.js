import React, { useState } from "react";
import {
    Button, Grid, Paper, TextField, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel,
    Radio, Dialog, DialogActions, DialogContent, IconButton
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function PostForm(props) {
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
                <AddCircleIcon style={{ fontSize: "65px" }} color="secondary" /></IconButton>
            <Paper>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" style={{ fontFamily: 'Varta, sans-serif' }}>
                                        New Post
                                </Typography>
                                </Grid>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend" style={{ fontFamily: 'Varta, sans-serif' }}>Post Type</FormLabel>
                                    <RadioGroup defaultValue="Study Group/Academic Inquiries" aria-label="postType" name="type" onChange={handleInputChange} required>
                                        <FormControlLabel value="Study Group/Academic Inquiries" control={<Radio />} label="Study Group/Academic Inquiries" style={{ fontFamily: 'Varta, sans-serif' }}/>
                                        <FormControlLabel value="Club Info/Updates" control={<Radio />} label="Club Info/Updates" style={{ fontFamily: 'Varta, sans-serif' }}/>
                                        <FormControlLabel value="Events/Extra Curriculars" control={<Radio />} label="Events/Extra Curriculars" style={{ fontFamily: 'Varta, sans-serif' }}/>
                                    </RadioGroup>
                                </FormControl>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        label="Post Title"
                                        value={formObject.title}
                                        name="title"
                                        style={{ fontFamily: 'Varta, sans-serif' }}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Description"
                                        value={formObject.body}
                                        name="body"
                                        style={{ fontFamily: 'Varta, sans-serif' }}
                                        onChange={handleInputChange}
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="secondary" type="submit" style={{ fontFamily: 'Varta, sans-serif' }} onClick={handleFormSubmit}>
                                        Add Post
                                </Button>
                                </Grid>
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

export default PostForm;