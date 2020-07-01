const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const assignmentSchema = new Schema(
    {
        name: {
            type: String,
            trim: true
            // Unique ?
        },
        due: {
            type: Date
        },
        notes: {
            type: String
        }
    }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;