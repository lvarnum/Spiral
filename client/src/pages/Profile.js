import React, { useState } from 'react';
// import { UserInfo, UserPosts } from "../components";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Grid} from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SaveIcon from '@material-ui/icons/Save';


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
            <Grid square style={{ backgroundColor: "white", width: "50%", marginLeft:"auto", marginRight:"auto" }} className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="secondary"
                    aria-label="navTabs"
                    centered
                    
                    
                >
                    {/* /profile needs to be routed to UserInfo.js */}
                    <Tab component={Link} to="/UserInfo" icon={<AssignmentIndIcon />} label="User Info" />
                    {/* /bulletinboard needs to be routed to UserPosts.js */}
                    <Tab component={Link} to="/bulletinboard" icon={<DashboardIcon />} label="User Posts" />
                    {/* /bulletinboard needs to be routed to SavedUserPosts.js */}
                    <Tab component={Link} to="/bulletinboard" icon={<SaveIcon />} label="Saved Posts" />

                </Tabs>
            </Grid>
        }
    </>

    )

}

export default Profile;