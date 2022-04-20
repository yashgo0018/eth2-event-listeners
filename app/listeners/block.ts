import EventSource from "eventsource";
import Block from "../models/block";

export default () => {
    const sse = new EventSource(`${process.env.RPC_URL}/eth/v1/events?topics=block`);

    sse.addEventListener("block", async ({ data }) => {
        const { slot, block } = JSON.parse(data);
        const blockObj = await Block.create({ slot: parseInt(slot), block });
        console.log(blockObj);
    });
}
