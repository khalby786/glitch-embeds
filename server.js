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

app.post('/git', (req, res) => {
  // If event is "push"
  if (req.headers['x-github-event'] == "push") {
    cmd.run('chmod 777 git.sh'); /* :/ Fix no perms after updating */
    cmd.get('./git.sh', (err, data) => {  // Run our script
      if (data) console.log(data);
      if (err) console.log(err);
    });
    cmd.run('refresh');  // Refresh project

    console.log("> [GIT] Updated with origin/master");
  }

  return res.sendStatus(200); // Send back OK status
});
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
