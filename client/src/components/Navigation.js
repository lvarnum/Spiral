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
  }
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














// function Navigation(props) {
//   const { user, logoutUser } = props;

//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar>
//           <Tabs
//             variant="fullWidth"
//             indicatorColor="secondary"
//             // textColor="secondary"
//             aria-label="icon label tabs example"
//           >
//             <Tab component={Link} to="/schedule" icon={<HomeIcon />} label="Home" />

//             <Tab component={Link} to="/calendar" color="secondary" icon={<CalendarTodayIcon />} label="Calendar" />
//             <Tab component={Link} to="/bulletinboard" color="secondary" icon={<ForumIcon />} label="Bulletin Board" />
//             <Tab component={Link} to="/home" onClick={logoutUser} color="secondary" icon={<ExitToAppIcon />} label="Logout" />

//             </Tabs>
//         </Toolbar>
//       </AppBar>
//     </>



//     <>
//       <AppBar position="static">
//         <Toolbar>
//           <Button component={Link} to="/schedule" color="inherit">Home</Button>
//           {user.email ?
//             <>
//               <Button component={Link} to="/calendar" color="inherit">Calendar</Button>
//               <Button component={Link} to="/bulletinboard" color="inherit">Bulletin Board</Button>
//               <Button component={Link} to="/home" onClick={logoutUser} color="inherit">Logout</Button>
//             </>
//             :
//             <>
//               {/* <Button component={Link} to="/login" color="inherit">Login</Button>
//               <Button component={Link} to="/signup" color="inherit">Signup</Button> */}
//             </>
//           }
//         </Toolbar>
//       </AppBar>
//     </>
//   )
// };

// export default Navigation;