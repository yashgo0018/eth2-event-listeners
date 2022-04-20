import mongoose from "mongoose";

const headSchema = new mongoose.Schema({
    slot: Number,
    block: String,
    state: String,
    epoch_transition: Boolean,
    previous_duty_dependent_root: String,
    current_duty_dependent_root: String,
    execution_optimistic: Boolean
});

const Head = mongoose.model("Head", headSchema);

export default Head;