import React, { useState } from "react";
import { AddAssignmentForm } from "../components";
import API from "../utils/API";

function AddAssignment(props) {
    const initialFormState = { name: "", notes: "", due: "" };
    const [formObject, setFormObject] = useState(initialFormState);

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Need to add to schedule item
        API.Assignment.create({
            name: formObject.name,
            notes: formObject.notes,
            due: formObject.due
        })
            .then(res => {
                API.User.update(props.user.id,
                    {
                        $push: { assignments: res.data._id }
                    }).then(res => console.log(res));
            });
    }

    return (
        <AddAssignmentForm
            formObject={formObject}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
        />
    )

}

export default AddAssignment;