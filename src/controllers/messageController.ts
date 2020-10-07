import express, { Router } from "express";
import { messageService } from "../services/messageService/messageService";

const router: Router = express.Router();

router.get("/", (req, res): void => {
	const messages = messageService.getMessages();
	res.send(messages);
});

router.get("/:id", (req, res): void => {
	const messageId = req.params.id;
	const message = messageService.getMessage(messageId);
	res.send(message);
});

router.post("/", (req, res): void => {
	const { author, text } = req.body;
	if (author && text) {
		messageService.addMessage(author, text);
		res.sendStatus(200);
	}
	res.sendStatus(400);
});

export default router;
