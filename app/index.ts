import "./load_dotenv";
import database from "./database";
import listeners from "./listeners";

async function main() {
    await database();
    listeners();
}
main();