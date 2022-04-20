import EventSource from "eventsource";
import VoluntaryExit from "../models/voluntaryExit";

export default () => {
    const sse = new EventSource(`${process.env.RPC_URL}/eth/v1/events?topics=voluntary_exit`);

    sse.addEventListener("voluntary_exit", async ({ data }) => {
        const {
            message: {
                epoch,
                validator_index
            },
            signature
        } = JSON.parse(data);
        const voluntaryExitObj = await VoluntaryExit.create({
            message: {
                epoch: parseInt(epoch),
                validatorIndex: parseInt(validator_index),
            },
            signature
        });
        console.log(voluntaryExitObj);
    });
}
