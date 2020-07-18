import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { UserInfo } from "../components";
import API from "../utils/API";


function Profile(props) {
    const [infoState, setInfo] = useState({
        university: "",
        session: "",
        scheduleItems: [],
        posts: []
    });
    const initialFormState = { session: "" };
    const [formObject, setFormObject] = useState(initialFormState);

    useEffect(() => {
        loadInfo();
    }, []);

    const loadInfo = () => {
        API.User.getById(props.user.id)
            .then(res => setInfo({
                university: res.data.university.name,
                session: res.data.session,
                scheduleItems: res.data.scheduleItems,
                posts: res.data.posts
            }));
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        API.User.update(props.user.id,
            { session: formObject.session })
            .then(res => {
                setFormObject(initialFormState);
                loadInfo();
            });
    }

    const handleClassDelete = (id, assignments) => {
        assignments.forEach(item => {
            API.User.update(props.user.id, {
                $pull: { assignments: item }
            }).then(res => {
                API.Assignment.delete(item);
            });
        });
        API.ScheduleItem.delete(id)
            .then(res => {
                API.User.update(props.user.id, {
                    $pull: { scheduleItems: id }
                }).then(res => {
                    loadInfo();
                });
            });
    }

    const handlePostDelete = (id) => {
        API.Post.delete(id)
            .then(res => {
                API.User.update(props.user.id, {
                    $pull: { posts: id }
                }).then(res => {
                    loadInfo();
                })
            });
    }


    return (
        <>
            <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center"
                style={{ border: "solid 2px #2c387e", marginBottom: "30px" }}>
                <Grid item xs={12}>
                    <Typography variant="h3" style={{ fontFamily: 'Varta, sans-serif' }}>{props.user.firstName}'s Profile</Typography>
                </Grid >
            </Grid>
            <UserInfo
                user={props.user}
                infoState={infoState}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                formObject={formObject}
                handleClassDelete={handleClassDelete}
                handlePostDelete={handlePostDelete}
            />
        </>

    )

}

export default Profile;