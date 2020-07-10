import React, { useState, useEffect } from "react";
import { AddClassForm } from "../components";


function AddClass(props) {
    const initialFormState = { prefix: "", number: "", professor: "", building: "", roomNumber: "", startTime: "", endTime: "" };
    const [formObject, setFormObject] = useState(initialFormState);
    const [courseState, setCourses] = useState({
        courses: []
    });

    useEffect(() => {
        API.User.getById(props.user.id)
            .then(res => {
                API.University.getById(res.data.university)
                    .then(res => {
                        setCourses({ courses: res.data.courses })
                    })
            })
    }, []);

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        API.ScheduleItem.create({
            course: `${formObject.prefix} ${formObject.number}`,
            professor: formObject.professor,
            startTime: formObject.startTime,
            endTime: formObject.endTime,
            location: `${formObject.building} ${formObject.roomNumber}`
        }).then(res => {
            API.User.update(props.user.id,
                {
                    $push: { scheduleItems: res.data._id }
                }).then(res => console.log(res))
        })
    }


    return (
        <AddClassForm
            formObject={formObject}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
        />
    )

}

export default AddClass;