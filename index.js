'use strict';

var fs = require('fs');
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
app.use("/hello",  (req, res) => {
    res.json('hello')
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

exports.get = function(event, context, callback) {
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};

//listener
// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("frontend/build"));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
// 	});
// }

//listener
// const port = process.env.PORT;
// app.listen(port, () => {
// 	console.log(`listening port localhost : ${port}`);
// });


