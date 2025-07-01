import express from "express"
import { configs } from "./config/config.js";


const app = express();







app.listen(configs.portNumber, () => {
    console.info(`Server Started At Port ${configs.portNumber}`);
})