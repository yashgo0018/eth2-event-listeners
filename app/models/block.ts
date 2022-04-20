import mongoose from "mongoose";

const blockSchema = new mongoose.Schema({
    slot: Number,
    block: String
});

const Block = mongoose.model("Block", blockSchema);

export default Block;