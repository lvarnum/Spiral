import React, { useState, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import API from "../utils/API";

function Auth(props) {
    const { user, loginUser, signupUser } = props;
    const initialFormState = { email: "", password: "", firstName: "", lastName: "", session: "", university: "" };
    const [formObject, setFormObject] = useState(initialFormState);
    const [universityState, setUniversities] = useState({
        universities: []
    });

    const location = useLocation();

    useEffect(() => {
        API.University.getAll()
            .then(res => {
                setUniversities({ universities: res.data });
            })
            .catch(err => console.log(err));
    }, []);

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const { email, password } = formObject;
        loginUser(email, password);
        setFormObject(initialFormState);
    }

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        const { email, password, firstName, lastName, session, university } = formObject;
        signupUser(email, password, firstName, lastName, session, university);
        setFormObject(initialFormState);
    }

    return (
        <>
            {user.email ?
                <Redirect to="/schedule" />
                :
                location.pathname === "/login" ?
                    <>
                        <LoginForm
                            formObject={formObject}
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleLoginSubmit} />

                    </>
                    :
                    <>
                        <SignupForm
                            formObject={formObject}
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleSignupSubmit}
                            universityState={universityState} />
                    </>
            }
        </>
    )
}

export default Auth;