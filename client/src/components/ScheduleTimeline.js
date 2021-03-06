import React from "react";
import {
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot
} from '@material-ui/lab';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import { Paper, Typography, Button } from '@material-ui/core/';
import moment from "moment";
import { Link } from "react-router-dom";

function ScheduleTimeline(props) {
    const { scheduleState } = props;
    scheduleState.schedule.sort(function (a, b) {
        if (a.startTime > b.startTime) {
            return 1;
        }
        if (a.startTime < b.startTime) {
            return -1;
        }
        return 0;
    });

    return (
        <Timeline >
            {scheduleState.schedule.map(item => (
                <TimelineItem key={item._id}>
                    <TimelineSeparator>
                        <TimelineDot>
                            <LabelImportantIcon color="primary" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{ flex: '0 1 100%' }}>
                        <Paper elevation={3} style={{ padding: "10px", backgroundColor: "#2c387e", color: "white" }}>
                            <Typography variant="h5" component="h1" style={{ fontFamily: 'Varta, sans-serif' }}>{item.course}</Typography>
                            <Typography variant="h6" component="h1" style={{ fontFamily: 'Varta, sans-serif' }}>{item.days.join(', ')}</Typography>
                            {item.startTime !== '' &&
                                <Typography variant="h6" style={{ fontFamily: 'Varta, sans-serif' }}>
                                    {moment(item.startTime, 'HH:mm').format('h:mm a')} - {moment(item.endTime, 'HH:mm').format('h:mm a')}
                                </Typography>
                            }
                            <Typography><PersonIcon color="secondary" style={{ marginRight: "5px" }} />
                                {item.professor}</Typography>
                            <Typography><LocationOnIcon color="secondary" style={{ marginRight: "5px" }} />
                                {item.location}</Typography>
                            <Button variant="contained" component={Link}
                                to={{ pathname: "/assignments", course: item._id }}
                                style={{ marginTop: "10px", backgroundColor: "white", fontFamily: 'Varta, sans-serif'}}>
                                View Assignments</Button>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

export default ScheduleTimeline; 