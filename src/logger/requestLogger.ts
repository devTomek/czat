import { logger } from "./logger";

const logRequest = (req: any): void => {
	const { method, url, body } = req;
	const bodyString = body ? JSON.stringify(body) : "";
	logger.info(`${method} ${url} ${bodyString}`);
};

const logResponse = (res: any): void => {
	const oldSend = res.send;
	res.send = function (data: any) {
		logger.info(`Response ${JSON.stringify(data)}`);
		oldSend.apply(res, arguments);
	};
};

export const requestLogger = (req: any, res: any, next: () => void) => {
	logRequest(req);
	logResponse(res);
	next();
};
