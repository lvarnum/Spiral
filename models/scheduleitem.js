const mongoose = require("mongoose");

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

const ScheduleItem = mongoose.model("ScheduleItem", scheduleItemSchema);

module.exports = ScheduleItem;