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

export const messageService = {
	getMessage,
	getMessages,
	addMessage,
};
