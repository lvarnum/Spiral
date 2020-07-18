import React from "react";
import {
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot
} from '@material-ui/lab';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import { Paper, Typography, IconButton } from '@material-ui/core/';
import moment from "moment";

function AssignmentTimeline(props) {
    const { assignmentState, handleCheck, handleDelete } = props;
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
                    <TimelineSeparator>
                        <TimelineDot>
                            <LabelImportantIcon color="primary" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{ flex: '0 1 100%' }}>
                        <Paper elevation={3} style={{ padding: "10px", backgroundColor: "#2c387e", color: "white" }}>
                            {item.done === false &&
                                <>
                                    <Typography variant="h6" component="h1" style={{ fontFamily: 'Varta, sans-serif' }}>{item.name}</Typography>
                                    <Typography style={{ fontFamily: 'Varta, sans-serif' }}>
                                        Due: {moment(item.due).format('MM/DD/YYYY')}
                                    </Typography>
                                    <Typography style={{ fontFamily: 'Varta, sans-serif' }}><b>Notes: </b></Typography>
                                    <Typography>{item.notes}</Typography>
                                    <IconButton aria-label="check"
                                        style={{ backgroundColor: "white", marginTop: "10px", marginRight: "10px", fontFamily: 'Varta, sans-serif' }}
                                        onClick={handleCheck.bind(this, item._id)}>
                                        <CheckIcon style={{ color: "green" }} />
                                    </IconButton>
                                    <IconButton aria-label="delete" style={{ backgroundColor: "white", marginTop: "10px", fontFamily: 'Varta, sans-serif'}}                                    
                                        onClick={handleDelete.bind(this, item._id)}>
                                        <DeleteIcon style={{ color: "red" }} />
                                    </IconButton>
                                </>
                            }
                            {item.done === true &&
                                <>
                                    <Typography variant="h5" component="h1" style={{ textDecoration: "line-through", fontFamily: 'Varta, sans-serif'}}>{item.name}</Typography>
                                    <Typography style={{ textDecoration: "line-through", fontFamily: 'Varta, sans-serif'}}>
                                        Due: {moment(item.due).format('MM/DD/YYYY')}
                                    </Typography>
                                    <Typography style={{ textDecoration: "line-through", fontFamily: 'Varta, sans-serif'}}><b>Notes: </b></Typography>
                                    <Typography style={{ textDecoration: "line-through", fontFamily: 'Varta, sans-serif'}}>{item.notes}</Typography>
                                    <IconButton aria-label="delete" style={{ backgroundColor: "white", marginTop: "10px", fontFamily: 'Varta, sans-serif'}}
                                        onClick={handleDelete.bind(this, item._id)}>
                                        <DeleteIcon style={{ color: "red" }} />
                                    </IconButton>
                                </>
                            }
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

export default AssignmentTimeline; 