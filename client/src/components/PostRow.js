import React, { useState } from "react";
import {
    TableRow, TableCell, IconButton, Collapse, Typography
} from '@material-ui/core';
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import moment from "moment";

function PostRow(props) {
    const { post } = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow >
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row"><Typography variant="body1">{post.postType}</Typography></TableCell>
                <TableCell><Typography variant="body1">{post.title}</Typography></TableCell>
                <TableCell><Typography variant="body1">{moment(post.date).format('MM/DD/YYYY, h:mm a')}</Typography></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, textAlign: "center", backgroundColor: "#2c387e", color: "white" }}
                    colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit style={{ padding: "10px" }}>
                        <Typography variant="h6">Description: </Typography>
                        <Typography variant="body1">{post.body}</Typography>
                        <Typography variant="h6">Posted By: </Typography>
                        <Typography variant="body1"><b>Name: </b>{post.user.firstName} {post.user.lastName}</Typography>
                        <Typography variant="body1"><b>Email: </b>{post.user.email}</Typography>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default PostRow;