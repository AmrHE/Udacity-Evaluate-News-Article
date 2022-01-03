const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(express.static("dist"));

app.use(cors());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.get("/", function (req, res) {
	res.sendFile("dist/index.html");
	// res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
	console.log(`Example app listening on port 8081!`);
});

// app.get("/test", function (req, res) {
// 	res.send(mockAPIResponse);
// });

app.post("/test", async function (req, res) {
	const { url } = req.body;
	const API_KEY = "cabcc9a3dc56784f8f04294fec859f18";
	const response = await fetch(
		`https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${url}&lang=en`,
		{ method: "POST" }
	);

	const articleAnalysis = await response.json();

	if (articleAnalysis && articleAnalysis.status.code === "0") {
		res.send(articleAnalysis);
	} else {
		res.status(500).send({ message: "Error" });
	}

	// console.log("🔥🔥 articleAnalysis 🔥🔥", articleAnalysis);
});
