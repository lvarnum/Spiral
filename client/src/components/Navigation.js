import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Tabs, Tab, Paper } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ForumIcon from '@material-ui/icons/Forum';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Navigation(props) {
  const { user } = props;

  const [value, setValue] = useState(0);
  const { logoutUser } = props;


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {
        user.email &&
        <Paper square style={{ backgroundColor: "#2c387e" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="navbar"
            
          >
            <Tab component={Link} to="/schedule" icon={<HomeIcon />} />
            <Tab component={Link} to="/bulletinboard" icon={<ForumIcon />} />
            <Tab component={Link} to="/profile" icon={<PersonPinIcon />} />
            <Tab component={Link} to="/home" onClick={logoutUser} icon={<ExitToAppIcon />} />

          </Tabs>
        </Paper>
      }
    </>
  );
}
export default Navigation;