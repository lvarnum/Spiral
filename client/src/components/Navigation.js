import React from "react";
import { Button, AppBar, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";

function Navigation(props) {
  const { user, logoutUser } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/home" color="inherit">Home</Button>
          {user.email ?
            <>
              <Button color="inherit">Logged in as: {user.email}</Button>
              <Button component={Link} to="/home" onClick={logoutUser} color="inherit">Logout</Button>
              <Button component={Link} to="/calendar" color="inherit">Calendar</Button>
              <Button component={Link} to="/schedule" color="inherit">Schedule</Button>
              <Button component={Link} to="/bulletinboard" color="inherit">Bulletin Board</Button>
              <Button component={Link} to="/addassignment" color="inherit">Add Assignment</Button>
              <Button component={Link} to="/addclass" color="inherit">Add Class</Button>
            </>
            :
            <>
              {/* <Button component={Link} to="/login" color="inherit">Login</Button>
              <Button component={Link} to="/signup" color="inherit">Signup</Button> */}
            </>
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navigation;