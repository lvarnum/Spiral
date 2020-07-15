import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@material-ui/lab';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { Paper, Typography } from '@material-ui/core/';

function ScheduleTimeline(props) {
    const { scheduleState } = props;

    return (
        <Timeline>
            {scheduleState.schedule.map(item => (
                <TimelineItem>
                    <TimelineOppositeContent style={{textAlign: "left"}}>
                        <Typography variant="body2" color="textSecondary">{item.startTime} - {item.endTime}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <LabelImportantIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3}>
                            <Typography variant="h6" component="h1">{item.course}</Typography>
                            <Typography>Professor: {item.professor}</Typography>
                            <Typography>Location: {item.location}</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

export default ScheduleTimeline; 