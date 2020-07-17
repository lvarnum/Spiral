import React from "react";
import {
    Table, TableBody, TableHead, Paper, TableRow, Grid, TableCell, Typography
} from '@material-ui/core';
import PostRow from "./PostRow";

function PostTable(props) {
    const { posts } = props;

    return (
        <Paper>
            <Grid container spacing={3} style={{ marginBottom: "50px" }}>
                <Grid item xs={12}>
                    <Table>
                        <TableHead style={{ backgroundColor: "#2c387e" }}>
                            <TableRow>
                                <TableCell />
                                <TableCell style={{ color: "white" }}><Typography variant="h6">Post Type</Typography></TableCell>
                                <TableCell style={{ color: "white" }}><Typography variant="h6">Title</Typography></TableCell>
                                <TableCell style={{ color: "white" }}><Typography variant="h6">Post Date</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {posts.length > 0 &&
                                posts.map(post => (
                                    <PostRow post={post} key={post._id} />
                                ))
                            }
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Paper >
    )
}

export default PostTable