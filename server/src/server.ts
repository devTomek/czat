import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.SERVER_PORT || 5000;

const app = express();

app.get("/", (req, res) => {
	res.send("It works!! 👨🏻‍💻");
});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
