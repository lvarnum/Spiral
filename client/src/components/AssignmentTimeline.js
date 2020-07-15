import React from "react";
import {
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent
} from '@material-ui/lab';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import { Paper, Typography, IconButton } from '@material-ui/core/';
import moment from "moment";

function AssignmentTimeline(props) {
    const { assignmentState } = props;
    assignmentState.assignments.sort(function (a, b) {
        if (a.due > b.due) {
            return 1;
        }
        if (a.due < b.due) {
            return -1;
        }
        return 0;
    });

    return (
        <Timeline >
            {assignmentState.assignments.map(item => (
                <TimelineItem key={item._id}>
                    <TimelineOppositeContent style={{ flex: "0 0 20%" }}>
                        <Typography>
                            {moment(item.due).format('MM/DD/YYYY')}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <LabelImportantIcon color="primary" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                        <Paper elevation={3} style={{ padding: "10px", backgroundColor: "#2c387e", color: "white" }}>
                            <Typography variant="h6" component="h1">{item.name}</Typography>
                            <Typography><b>Notes: </b></Typography>
                            <Typography>{item.notes}</Typography>
                            <IconButton aria-label="delete" style={{ backgroundColor: "white", marginTop: "10px", marginRight: "10px" }}>
                                <DeleteIcon style={{ color: "red" }} />
                            </IconButton>
                            <IconButton aria-label="check" style={{ backgroundColor: "white", marginTop: "10px" }}>
                                <CheckIcon style={{ color: "green" }} />
                            </IconButton>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

export default AssignmentTimeline; 