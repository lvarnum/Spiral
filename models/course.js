const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        prefix: {
            type: String,
            trim: true
            // Unique ?
        },
        numbers: [
            { type: String}
        ],
        university: {
            type: Schema.Types.ObjectId,
            ref: 'University'
        }
    }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
