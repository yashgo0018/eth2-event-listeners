import EventSource from "eventsource";
import ChainReorg from "../models/chainReorg";

export default () => {
    const sse = new EventSource(`${process.env.RPC_URL}/eth/v1/events?topics=chain_reorg`);

    sse.addEventListener("chain_reorg", async ({ data }) => {
        const {
            slot,
            depth,
            old_head_block,
            new_head_block,
            old_head_state,
            new_head_state,
            epoch,
            execution_optimistic
        } = JSON.parse(data);
        const chainReorgObj = await ChainReorg.create({
            slot: parseInt(slot),
            depth: parseInt(depth),
            old_head_block,
            new_head_block,
            old_head_state,
            new_head_state,
            epoch: parseInt(epoch),
            execution_optimistic
        });
        console.log(chainReorgObj);
    });
}
