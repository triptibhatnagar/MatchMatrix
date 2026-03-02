const matchSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resume",
        required: true
    },
    matchedSkills: [
        {
            type: String,
        },
    ],
    missingSkills: [
        {
            type: String,
        },
    ],
},
{
    timestamps: true,
})

module.exports = mongoose.model("Match", matchSchema)