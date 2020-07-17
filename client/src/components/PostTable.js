import React, { useState } from "react";
import {
    Table, TableBody, TableHead, Paper, TableRow, Grid, TableCell, IconButton, Collapse, Box, Typography
} from '@material-ui/core';
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import moment from "moment";

function PostTable(props) {
    const { posts } = props;
    const [open, setOpen] = useState(false);

    return (
        <Paper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Table>
                        <TableHead style={{ backgroundColor: "#2c387e" }}>
                            <TableRow>
                                <TableCell>
                                    <IconButton aria-label="expand row" size="small" style={{ color: "white" }} disabled />
                                </TableCell>
                                <TableCell style={{ color: "white" }}>Title</TableCell>
                                <TableCell style={{ color: "white" }}>Posted</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {posts.length > 0 &&
                                posts.map(post => (
                                    <>
                                        <TableRow key={post._id}>
                                            <TableCell>
                                                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                </IconButton>
                                            </TableCell>
                                            <TableCell component="th" scope="row">{post.title}</TableCell>
                                            <TableCell align="right">{moment(post.date).format('MM/DD/YYYY, h:mm a')}</TableCell>
                                        </TableRow>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <Box margin={1}>
                                                <Typography variant="h6" gutterBottom component="div">
                                                    Post Info
                                      </Typography>
                                            </Box>
                                        </Collapse>
                                    </>
                                ))
                            }
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PostTable