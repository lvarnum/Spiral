import React from "react";
import { Button, Grid, Paper, Container, TextField, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

function PostForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <>
            <Paper>
                <Container maxWidth="sm">
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    New Post
                                </Typography>
                            </Grid>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Post Type</FormLabel>
                                <RadioGroup defaultValue="Study Group/Academic Inquiries" aria-label="postType" name="customized-radios">
                                    <FormControlLabel value="Study Group/Academic Inquiries" control={<Radio />} label="Study Group/Academic Inquiries" />
                                    <FormControlLabel value="Club Info/Updates" control={<Radio />} label="Club Info/Updates" />
                                    <FormControlLabel value="Events/Extra Curricular" control={<Radio />} label="Events/Extra Curricular" />
                                </RadioGroup>
                            </FormControl>
                            <Grid item xs={12}>
                                <TextField
                                    label="Post Title"
                                    value={formObject.title}
                                    name="post title"
                                    onChange={handleInputChange}
                                    helperText="Enter the Title of your Post"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description"
                                    value={formObject.body}
                                    name="description"
                                    onChange={handleInputChange}
                                    helperText="Enter the Description of your Post"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="secondary" type="submit" onClick={handleFormSubmit}>
                                    Post!
                                </Button>
                            </Grid>
                        </Grid>

                    </form>
                </Container>
            </Paper>
        </>
    )
}

export default PostForm;