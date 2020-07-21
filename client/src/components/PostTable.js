import React from "react";
import {
    Table, TableBody, TableHead, Paper, TableRow, Grid, TableCell, Typography, TableContainer
} from '@material-ui/core';
import PostRow from "./PostRow";

function PostTable(props) {
    const { posts } = props;

    posts.sort(function (a, b) {
        if (a.date > b.date) {
            return 1;
        }
        if (a.date < b.date) {
            return -1;
        }
        return 0;
    });

    return (
        <Grid container spacing={3} style={{ marginBottom: "30px" }}>
            <Grid item xs={12}>
                <TableContainer component={Paper} style={{ width: "100%" }}>
                    <Table>
                        <TableHead style={{ backgroundColor: "#2c387e" }}>
                            <TableRow>
                                <TableCell />
                                <TableCell style={{ color: "white" }}><Typography variant="h6" style={{ fontFamily: 'Varta, sans-serif' }}>Post Type</Typography></TableCell>
                                <TableCell style={{ color: "white" }}><Typography variant="h6" style={{ fontFamily: 'Varta, sans-serif' }}>Title</Typography></TableCell>
                                <TableCell style={{ color: "white" }}><Typography variant="h6" style={{ fontFamily: 'Varta, sans-serif' }}>Post Date</Typography></TableCell>
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
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default PostTable