import React, { useState } from 'react';
// import { UserInfo, UserPosts } from "../components";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Grid} from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CommentIcon from '@material-ui/icons/Comment';
import ClassIcon from '@material-ui/icons/Class';

const useStyles = makeStyles({
    root: {
        maxWidth: "500"
    },
});

function Profile(props) {
    const { user } = props;

    const classes = useStyles();
    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
        {
            user.email &&
            <Grid square style={{ backgroundColor:"white", marginLeft:"auto", marginRight:"auto"}} className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="secondary"
                    aria-label="navTabs"
                    centered
                    
                >

                    <Tab component={Link} to="/UserInfo" icon={<AssignmentIndIcon />} label="User Info" />
                    <Tab component={Link} to="/UserPosts" icon={<CommentIcon />} label="User Posts" />
                    <Tab component={Link} to="/UserClasses" icon={<ClassIcon />} label="User Classes" />

                </Tabs>
            </Grid>
        }
    </>

    )

}

export default Profile;