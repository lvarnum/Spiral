const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const universitySchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: true
        },
        state: {
            type: String
        },
        courses: [
            { type: Schema.Types.ObjectId, ref: 'Course' }
        ]
    }
);

const University = mongoose.model("University", universitySchema);

module.exports = University;
