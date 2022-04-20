import EventSource from "eventsource";
import Head from "../models/head";

export default () => {
    const sse = new EventSource(`${process.env.RPC_URL}/eth/v1/events?topics=head`);

    sse.addEventListener("head", async ({ data }) => {
        const {
            slot,
            block,
            state,
            epoch_transition,
            previous_duty_dependent_root,
            current_duty_dependent_root,
            execution_optimistic
        } = JSON.parse(data);
        const headObj = await Head.create({
            slot: parseInt(slot),
            block,
            state,
            epoch_transition,
            previous_duty_dependent_root,
            current_duty_dependent_root,
            execution_optimistic
        });
        console.log(headObj);
    });
}