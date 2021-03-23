require("dotenv").config();
const express = require("express")
const path = require("path");

// const router = require("./Routes");
const app = express();
const PORT = process.env.NODE_SERVER_PORT;

app.use(express.static(path.join(__dirname, "../build/")));

app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(express.json({ limit: '1mb' }));
// app.use(router);

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
});

