import mongoose from "mongoose";

const attestationSchema = new mongoose.Schema({
    aggregation_bits: String,
    signature: String,
    data: {
        slot: Number,
        index: Number,
        beacon_block_root: String,
        source: {
            epoch: Number,
            root: String
        },
        target: {
            epoch: Number,
            root: String
        }
    }
});

const Attestation = mongoose.model("Attestation", attestationSchema);

export default Attestation;