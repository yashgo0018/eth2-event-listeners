import mongoose from "mongoose";

const chainReorgSchema = new mongoose.Schema({
    slot: Number,
    depth: Number,
    old_head_block: String,
    new_head_block: String,
    old_head_state: String,
    new_head_state: String,
    epoch: Number,
    execution_optimistic: Boolean
});

const ChainReorg = mongoose.model("ChainReorg", chainReorgSchema);

export default ChainReorg;