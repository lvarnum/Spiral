import React, { useEffect, useState } from "react";
import { Grid, Typography, Paper, Tabs, Tab } from '@material-ui/core';
import API from "../utils/API";
import { PostTable, PostForm } from "../components";
import moment from "moment";

function BulletinBoard(props) {
    const initialFormState = { title: "", body: "", type: "Study Group/Academic Inquiries" };
    const [posts, setPosts] = useState([]);
    const [formObject, setFormObject] = useState(initialFormState);
    const [universityState, setUniversity] = useState({
        university: ""
    });
    const [value, setValue] = useState(0);


    useEffect(() => {
        loadPosts();
    }, [])

    const loadPosts = () => {
        API.Post.getAll({ $where: { university: props.user.university } }).then(res => {
            setPosts(res.data);
        });
        API.University.getById(props.user.university)
            .then(res => setUniversity({ university: res.data.name }));
    }

    const loadFiltered = (type) => {
        console.log(type)
        if (type === "academic") {
            API.Post.getAll({ $where: { postType: "Study Group/Academic Inquiries" } })
                .then(res => {
                    console.log(res.data);
                    setPosts(res.data);
                });
        }

    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: formObject.title,
            body: formObject.body,
            postType: formObject.type,
            university: props.user.university
        }
        API.Post.create(data).then(res => {
            API.User.update(props.user.id, {
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
                    <Typography variant="h5">{moment().format('dddd, MMMM Do YYYY, h:mm a')}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <PostForm
                        formObject={formObject}
                        handleFormSubmit={handleFormSubmit}
                        handleInputChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="All" onClick={loadPosts} />
                            <Tab label="Academic Inquiries" onClick={loadFiltered.bind(this, "academic")} />
                            <Tab label="Clubs" onClick={loadFiltered.bind(this, "clubs")} />
                            <Tab label="Extra Curriculars" onClick={loadFiltered.bind(this, "events")} />
                        </Tabs>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <PostTable posts={posts} />
                </Grid>
            </Grid>
        </>
    )

}


export default BulletinBoard;