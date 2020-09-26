import express from "express";

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
	res.send("It works!! 👨🏻‍💻");
});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
