import EventSource from "eventsource";
import FinalizedCheckpoint from "../models/finalizedCheckpoint";

export default () => {
    const sse = new EventSource(`${process.env.RPC_URL}/eth/v1/events?topics=finalized_checkpoint`);

    sse.addEventListener("finalized_checkpoint", async ({ data }) => {
        const {
            block,
            state,
            epoch,
            execution_optimistic
        } = JSON.parse(data);
        const finalizedCheckpointObj = await FinalizedCheckpoint.create({
            block,
            state,
            epoch: parseInt(epoch),
            execution_optimistic
        });
        console.log(finalizedCheckpointObj);
    });
}
