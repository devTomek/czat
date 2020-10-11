import winston from "winston";

export const logger = winston.createLogger({
	level: "info",
	format: winston.format.combine(
		winston.format.json(),
		winston.format.timestamp()
	),
	transports: [
		new winston.transports.Console({
			level: "info",
			format: winston.format.simple(),
		}),
	],
});
