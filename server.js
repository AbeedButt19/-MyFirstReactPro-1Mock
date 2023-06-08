var app = require("express")();
var config = require("./config.json");
const http = require("http");
const bodyParser = require("body-parser");
const { createPDF } = require("./formats/pdf");
const { createZPL } = require("./formats/zpl");
const { Registration } = require("./registration");
const { Signin } = require("./sign-in");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.post("/react-app/registration", async (req, res) => {
  let response = await Registration(req.body);
  fileLength = response.length;
  res.status(200);
  res.set("Content-Type", "application/json");
  res.set("Content-Length", fileLength);
  res.send(response);
});
app.get("/react-app/signin", async (req, res) => {
  let response = await Signin();
  fileLength = response.length;
  res.status(200);
  res.set("Content-Type", "application/json");
  res.set("Content-Length", fileLength);
  res.send(response);
});
var server = http.createServer(app);
server.listen(config.port, function () {
  console.log("%s mockup app listening at %s://localhost:%s", config.moduleName, "http", config.port);
});
