const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const DIST_DIR = path.join(__dirname, '../public');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};
app.use(express.static(DIST_DIR));
app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.get('/', (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});
app.listen(port, function () {
  console.log('App listening on port: ' + port);
});











// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const path = require("path");

// //App config
// const app = express();
// app.use(express.json({ limit: '50mb' }));
// app.use(cookieParser());



// // routes
// app.use("/",  (req, res) => {
// 	app.use(express.static("public"));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.join(__dirname, "public",  "index.html"));

// 	});
// });


// mongoose.connect(
// 	process.env.CONNECTION_URL,
// 	{
// 		useNewUrlParser: true,
// 		// useCreateIndex: true,
// 		// useUnifiedTopology: true,
// 		// useFindAndModify: false,
// 	},
// 	(err) => {
// 		if (err) throw err;
// 		console.log("connected to mongodb");
// 	},
// );
// //listener
// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("public"));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.join(__dirname, "public",  "index.html"));
// 	});
// }

// // listener
// const port = process.env.PORT;
// app.listen(port, () => {
// 	console.log(`listening port localhost : ${port}`);
// });


