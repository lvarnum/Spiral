import React, { useState } from "react";
import {
    Button, Grid, Paper, Container, TextField, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel,
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
            <Paper>
                <IconButton aria-label="add" size="medium" color="primary" onClick={handleClickOpen}>
                    <AddCircleIcon size="large" color="secondary" style={{ marginRight: "5px" }} />
                     Add Post
                    </IconButton>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h6">
                                        New Post
                                </Typography>
                                </Grid>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Post Type</FormLabel>
                                    <RadioGroup defaultValue="Study Group/Academic Inquiries" aria-label="postType" name="type" onChange={handleInputChange}>
                                        <FormControlLabel value="Study Group/Academic Inquiries" control={<Radio />} label="Study Group/Academic Inquiries" />
                                        <FormControlLabel value="Club Info/Updates" control={<Radio />} label="Club Info/Updates" />
                                        <FormControlLabel value="Events/Extra Curriculars" control={<Radio />} label="Events/Extra Curriculars" />
                                    </RadioGroup>
                                </FormControl>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Post Title"
                                        value={formObject.title}
                                        name="title"
                                        onChange={handleInputChange}
                                        helperText="Enter the Title of your Post"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Description"
                                        value={formObject.body}
                                        name="body"
                                        onChange={handleInputChange}
                                        helperText="Enter the Description of your Post"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="secondary" type="submit" onClick={handleFormSubmit}>
                                        Add Post
                                </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        </>
    )
}

export default PostForm;