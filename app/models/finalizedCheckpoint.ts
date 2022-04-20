import mongoose from "mongoose";

const finalizedCheckpointSchema = new mongoose.Schema({
    block: String,
    state: String,
    epoch: Number,
    execution_optimistic: Boolean
});

const FinalizedCheckpoint = mongoose.model("FinalizedCheckpoint", finalizedCheckpointSchema);

export default FinalizedCheckpoint;