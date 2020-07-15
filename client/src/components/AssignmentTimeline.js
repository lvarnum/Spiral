import React from "react";
import {
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent
} from '@material-ui/lab';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { Paper, Typography } from '@material-ui/core/';
import moment from "moment";

function AssignmentTimeline(props) {
    const { assignmentState } = props;

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
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

export default AssignmentTimeline; 