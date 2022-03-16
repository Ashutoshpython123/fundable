require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");

//App config
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());



// routes
app.use("/",  (req, res) => {
	app.use(express.static("dist"));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "dist",  "index.html"));

	});
});


mongoose.connect(
	process.env.CONNECTION_URL,
	{
		useNewUrlParser: true,
		// useCreateIndex: true,
		// useUnifiedTopology: true,
		// useFindAndModify: false,
	},
	(err) => {
		if (err) throw err;
		console.log("connected to mongodb");
	},
);
//listener
if (process.env.NODE_ENV === "production") {
	app.use(express.static("dist"));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "dist",  "index.html"));
	});
}

// listener
const port = process.env.PORT;
app.listen(port, () => {
	console.log(`listening port localhost : ${port}`);
});


