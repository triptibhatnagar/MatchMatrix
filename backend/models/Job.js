const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Job title is required"],
        trim: true,
    },
    company: {
        type: String,
        required: [true, "Company name is required"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Job description is required"],
    },
    requiredSkills: [
        {
            type: String,
            lowercase: true,
            required: true,
        },
    ],
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model("Job", jobSchema)