import express from "express";

const port = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
	res.send("It works!! 👨🏻‍💻");
});

app.get("/api/todos", (req, res) => {
	res.send([{ task: "task1" }, { task: "task2" }, { task: "task3" }]);
});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
