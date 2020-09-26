import express from "express";

const port = 8080;

const app = express();

app.get("/", (req, res) => {
	res.send("it works 👨🏻‍💻");
});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
