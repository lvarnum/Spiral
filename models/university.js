const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const universitySchema = new Schema(
    {
        name: {
            type: String,
            trim: true
            // Unique ?
        },
        state: {
            type: String
        },
        classes: [
            { type: Schema.Types.ObjectId, ref: 'Class' }
        ]
    }
);

const University = mongoose.model("University", universitySchema);

module.exports = University;
