import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Home, Schedule, BulletinBoard, BigCalendar, Assignments, Profile } from "./pages";
import Auth from "./pages/Auth"
import { Navigation, Error } from "./components";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import API from './utils/API';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("")

  function loginUser(email, password) {
    const data = {
      email: email,
      password: password
    }
    API.Auth.login(data).then(res => {
      setUser(res.data)

    })
  }

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2c387e',
        contrastText: '#fff',
      },
      secondary: {
        main: '#ffc400',
        contrastText: '#000',
      },
    },
  })

  function signupUser(email, password, firstName, lastName, session, university) {
    const data = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      session: session,
      university: university
    }
    API.Auth.signup(data).then(res => {
      setUser(res.data)
    }).catch(err => {
      setError("Email already taken")
    })
  }

  function logoutUser() {
    API.Auth.logout().then(res => {
      setUser({});
    })
  }

  function clearError() {
    setError("");
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Navigation user={user} logoutUser={logoutUser} />
              </Grid>
              <Grid item xs={12}>
                {error && <Error error={error} clearError={clearError} />}
              </Grid>
              <Grid item xs={12}>
                <Switch>
                  <Route exact path={["/", "/home"]}>
                    <Home user={user} logoutUser={logoutUser}/>
                  </Route>
                  <PrivateRoute exact user={user} path={["/calendar"]}>
                    <BigCalendar user={user} />
                  </PrivateRoute>
                  <PrivateRoute exact user={user} path={["/schedule"]}>
                    <Schedule user={user} />
                  </PrivateRoute>
                  <PrivateRoute exact user={user} path={["/bulletinboard"]}>
                    <BulletinBoard user={user} />
                  </PrivateRoute>
                  <PrivateRoute exact user={user} path={["/profile"]}>
                    <Profile user={user} />
                  </PrivateRoute>
                  <PrivateRoute exact user={user} path={["/assignments"]}>
                    <Assignments user={user} />
                  </PrivateRoute>
                  <Route exact path={["/login", "/signup"]}>
                    <Auth
                      user={user}
                      loginUser={loginUser}
                      signupUser={signupUser}
                    />
                  </Route>
                </Switch>
              </Grid>
            </Grid>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

function PrivateRoute(props) {
  return (
    <>
      {props.user.email ?
        <Route {...props}>
          {props.children}
        </Route>
        :
        <Redirect to="/login" />
      }
    </>
  )
}

export default App;
