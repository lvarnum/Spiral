const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const assignmentSchema = new Schema(
    {
        name: {
            type: String,
            trim: true
        },
        due: {
            type: String
        },
        notes: {
            type: String
        },
        done: {
            type: Boolean
        }
    }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;