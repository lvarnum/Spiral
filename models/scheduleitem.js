const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const scheduleItemSchema = new Schema(
    {
        course: {
            type: String
        },
        professor: {
            type: String,
            trim: true
        },
        startTime: {
            type: String
            // make actual time Moment.js or Material.UI Time Input
        },
        endTime: {
            type: String
            // make actual time Moment.js or Material.UI Time Input
        },
        location: {
            type: String
        },
        assignments: [
            { type: Schema.Types.ObjectId, ref: 'Assignment' }
        ]

    }
);

const scheduleItem = mongoose.model("scheduleItem", scheduleItemSchema);

module.exports = scheduleItem;