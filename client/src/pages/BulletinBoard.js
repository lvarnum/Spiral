import React, { useEffect, useState } from "react";
import { Grid, Typography } from '@material-ui/core';
import API from "../utils/API";
import { PostTable, PostForm } from "../components";

function BulletinBoard(props) {
    const initialFormState = { title: "", body: "", type: "" };
    const [posts, setPosts] = useState([]);
    const [formObject, setFormObject] = useState(initialFormState);
    const [universityState, setUniversity] = useState({
        university: ""
    });


    useEffect(() => {
        loadPosts();
    }, [])

    const loadPosts = () => {
        API.Post.getAll().then(res => {
            setPosts(res.data);
        });
        API.University.getById(props.user.university)
            .then(res => setUniversity({ university: res.data.name }));
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(event.target);
        setFormObject({ ...formObject, [name]: value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: formObject.title,
            body: formObject.body,
            type: formObject.type
        }
        API.Post.create(data).then(res => {
            API.User.update({
                $push: { posts: res.data._id }
            }).then(res => {
                setFormObject(initialFormState);
                loadPosts();
            })
        });
    }

    return (
        <>
            <Grid container spacing={2} direction="column" align="center" justify="center" alignItems="center"
                style={{ border: "solid 2px #2c387e", marginBottom: "15px" }}>
                <Grid item xs={12}>
                    <Typography variant="h2">Community Bulletin</Typography>
                </Grid >
                <Grid item xs={12}>
                    <Typography variant="h4">{universityState.university}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5} direction="column" align="center" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <PostForm
                        formObject={formObject}
                        handleFormSubmit={handleFormSubmit}
                        handleInputChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <PostTable posts={posts} />
                </Grid>
            </Grid>
        </>
    )

}


export default BulletinBoard;