const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const classSchema = new Schema(
    {
        prefix: {
            type: String,
            trim: true
            // Unique ?
        },
        numbers: [
            { type: Number }
        ],
        university: {
            type: Schema.Types.ObjectId,
            ref: 'University'
        }
    }
);

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
