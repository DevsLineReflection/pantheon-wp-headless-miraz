const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get('/health', (req, res) => {
	res.send("server is up and running");
	return;
})

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
	return;
});

app.listen(9920, () => {
	console.log("server run at port 9920");
})