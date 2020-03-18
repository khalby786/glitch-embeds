// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

app.use(express.static("demo/public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/collection", function(request, response) {
  response.sendFile(__dirname + "/demo/collection/collection.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
