import express, { Application } from "express";
import router from "./router";
import bodyParser from "body-parser";

const port: string | number = process.env.PORT || 8080;
const app: Application = express();
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use("/api", router);

app.listen(port);
