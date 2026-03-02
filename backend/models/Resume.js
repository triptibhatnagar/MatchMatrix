const { default: mongoose } = require("mongoose");

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    rawText: {
        type: String,
        required: true,
    },
    extractedSkills: [
        {
            type: String,
            lowercase: true,
        },
    ],
    education: {
        type: String,
    },
    experience: {
        type: String,
    },
    fileName: {
        type: String
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model("Resume", resumeSchema)