// import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ForumIcon from '@material-ui/icons/Forum';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    maxWidth: 1000,
  },
});

export default function IconLabelTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { logoutUser } = props;


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Paper square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab component={Link} to="/schedule" icon={<HomeIcon />} label="Home" />
            <Tab component={Link} to="/calendar" icon={<CalendarTodayIcon />} label="Calendar" />
            <Tab component={Link} to="/bulletinboard" icon={<ForumIcon />} label="Bulletin Board" />
            <Tab component={Link} to="/profile" icon={<PersonPinIcon />} label="Profile" />
            <Tab component={Link} to="/home" onClick={logoutUser} icon={<ExitToAppIcon />} label="Logout" />

          </Tabs>
        </Paper>
      </Toolbar>
    </AppBar>
  );
}














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