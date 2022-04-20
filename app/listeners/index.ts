import attestationListener from "./attestation";
import blockListener from "./block";
import chainReorgListener from "./chainReorg";
import finalizedCheckpointListener from "./finalizedCheckpoint";
import headListener from "./head";
import voluntaryExitListener from "./voluntaryExit";

function listeners() {
    attestationListener();
    blockListener();
    headListener();
    finalizedCheckpointListener();
    voluntaryExitListener();
    chainReorgListener();
}

export default listeners;