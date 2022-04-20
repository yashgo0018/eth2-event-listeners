import mongoose from "mongoose";

const voluntaryExitSchema = new mongoose.Schema({
    message: {
        epoch: Number,
        validatorIndex: Number
    },
    signature: String
});

const VoluntaryExit = mongoose.model("VoluntaryExit", voluntaryExitSchema);

export default VoluntaryExit;