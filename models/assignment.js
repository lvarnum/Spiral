const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const assignmentSchema = new Schema(
    {
        name: {
            type: String,
            trim: true
        },
        due: {
            type: Date
        },
        notes: {
            type: String
        },
        done: {
            type: Boolean,
            defaultValue: false
        }
    }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;