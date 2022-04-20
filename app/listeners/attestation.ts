import EventSource from "eventsource";
import Attestation from "../models/attestation";

export default () => {
    const sse = new EventSource(`${process.env.RPC_URL}/eth/v1/events?topics=attestation`);
    console.log(`${process.env.RPC_URL}/eth/v1/events?topics=attestation`);
    sse.addEventListener("attestation", async ({ data }) => {
        const {
            aggregation_bits,
            signature,
            data: {
                slot,
                index,
                beacon_block_root,
                source: {
                    epoch: sourceEpoch,
                    root: sourceRoot
                },
                target: {
                    epoch: targetEpoch,
                    root: targetRoot
                }
            }
        } = JSON.parse(data);
        console.log(data)
        const attestationObj = await Attestation.create({
            aggregation_bits,
            signature,
            data: {
                slot: parseInt(slot),
                index: parseInt(index),
                beacon_block_root,
                source: {
                    epoch: parseInt(sourceEpoch),
                    root: sourceRoot
                },
                target: {
                    epoch: parseInt(targetEpoch),
                    root: targetRoot
                }
            }
        });
        console.log(attestationObj);
    });
}
