import express, { Application } from "express";
import router from "./router";
import bodyParser from "body-parser";
import { requestLogger } from "./logger/requestLogger";
import { logger } from "./logger/logger";

const port: string | number = process.env.PORT || 8080;
const app: Application = express();
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(requestLogger);
app.use("/api", router);

app.listen(port, () => {
	logger.info(`Server running on port: ${port}`);
});
