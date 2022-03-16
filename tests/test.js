const request = require('supertest');
const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.status(200);
});

request(app)
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;
  });