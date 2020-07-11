import React, { useState, useEffect } from "react";
import { AddClassForm, ScheduleTimeline } from "../components";
import API from "../utils/API";


function Schedule(props) {
    const initialFormState = { prefix: "", number: "", professor: "", building: "", roomNumber: "", startTime: "", endTime: "" };
    const [formObject, setFormObject] = useState(initialFormState);
    const [universityState, setUniversity] = useState({
        university: ""
    });
    const [scheduleState, setSchedule] = useState({
        schedule: []
    });

    useEffect(() => {
        API.User.getById(props.user.id)
            .then(res => {
                loadSchedule(res.data.scheduleItems);
                API.University.getById(res.data.university)
                    .then(res => {
                        setUniversity({ university: res.data });
                    })
            });
    }, [props.user.id]);

    function loadSchedule(scheduleItems) {
        scheduleItems.forEach(item => {
            
        })
    }

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
        });
        setFormObject(initialFormState);
    }
    return (
        <>
            <ScheduleTimeline 
            scheduleState={scheduleState}
            />

            <AddClassForm
                formObject={formObject}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                universityState={universityState}
            />
        </>
    );

}

export default Schedule;