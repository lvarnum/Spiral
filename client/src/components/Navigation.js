import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Paper } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ForumIcon from '@material-ui/icons/Forum';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  root: {
    maxWidth: "auto"
  },
});

function Navigation(props) {
  const { user } = props;

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { logoutUser } = props;


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {
        user.email &&
        <Paper square style={{ backgroundColor: "#2c387e" }} className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="secondary"
            aria-label="navbar"
          >
            <Tab component={Link} to="/schedule" icon={<HomeIcon />} label="Home" />
            <Tab component={Link} to="/calendar" icon={<CalendarTodayIcon />} label="Calendar" />
            <Tab component={Link} to="/bulletinboard" icon={<ForumIcon />} label="Bulletin Board" />
            <Tab component={Link} to="/home" onClick={logoutUser} icon={<ExitToAppIcon />} label="Logout" />

          </Tabs>
        </Paper>
      }
    </>
  );
}
export default Navigation;