import express from "express"
import { configs } from "./config/config.js";
import { router } from "./router/router.js";
import cors from "cors";
import bodyParser from "body-parser";
import "./router/allControllers.js"
import { dbConnection } from "./utils/dbConnect.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/ghostend",router);

await dbConnection();

app.listen(configs.portNumber, () => {
    console.info(`Server Started At Port ${configs.portNumber}`);
})