import React, { useState } from "react";
import { AddClassForm } from "../components";


function AddClass() {
    const initialFormState = { prefix: "", number: "", professor: "", building: "", roomNumber: "", startTime: "", endTime: "" };
    const [formObject, setFormObject] = useState(initialFormState);

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
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