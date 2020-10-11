import express, { Router } from "express";
import { messageService } from "../services/messageService/messageService";

const router: Router = express.Router();

// get messages
router.get("/", (req, res): void => {
	const messages = messageService.getMessages();
	res.send(messages);
});

// get message
router.get("/:id", (req, res): void => {
	const messageId = req.params.id;
	const message = messageService.getMessage(messageId);
	res.send(message);
});

// add message
router.post("/", (req, res): void => {
	const { author, text } = req.body;
	if (author && text) {
		messageService.addMessage(author, text);
		res.sendStatus(200);
	}
	res.sendStatus(400);
});

// update message
router.post("/:id", (req, res): void => {
	const messageId = req.params.id;
	const { author, text } = req.body;
	messageService.updateMessage(messageId, author, text);
	res.sendStatus(200);
});

// delete message
router.delete("/:id", (req, res): void => {
	const messageId = req.params.id;
	messageService.deleteMessage(messageId);
	res.sendStatus(200);
});

export default router;
