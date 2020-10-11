import { messages } from "../../messages";
import { Message } from "./types";

const getMessages = (): Message[] => messages;

const getMessage = (messageId: string): Message | null => {
	return messages.find((message) => message.id === messageId) || null;
};

const addMessage = (author: string, text: string): void => {
	const id = `${messages.length + 1}`;
	const message = {
		id,
		author,
		text,
	};
	messages.push(message);
};

const updateMessage = (
	messageId: string,
	author: string,
	text: string
): void => {
	const messageToChageIndex = messages.findIndex(
		(message) => message.id === messageId
	);
	messages[messageToChageIndex] = {
		id: messageId,
		author,
		text,
	};
};

// todo doesn't work
const deleteMessage = (messageId: string): void => {
	const messageIndex = messages.findIndex(
		(message) => message.id === messageId
	);
	messages.splice(messageIndex, 1);
};

export const messageService = {
	getMessage,
	getMessages,
	addMessage,
	updateMessage,
	deleteMessage,
};
