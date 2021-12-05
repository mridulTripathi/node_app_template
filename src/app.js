const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://mridul:<password>@cluster0.lstng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Successfully Connected to Mongo DB");
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}\nhttp://www.localhost:3000`);
});