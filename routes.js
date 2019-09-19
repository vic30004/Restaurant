var express = require("express");
var path = require("path");

var app = express();
var PORT = 3030;

var tables = [{
  name: "Andrew Tocchi",
  phone: "5307012179",
  email: "andrewtocchi@gmail.com"
},
{
  name: "Mike Brown",
phone: "5555555555",
email: "mikebrown@gmail.com",
}];

var queue = [{
  name: "Mike Brown",
  phone: "5555555555",
  email: "mikebrown@gmail.com",
}];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  // Welcome to our Restaurant!")
  res.sendFile(path.join(__dirname, "rest.html"));
});

app.post("/tables", function (req, res) {
  // Welcome to our Restaurant!")
    tables.push(req.body);
    return res.json(tables);

});

app.get("/api/:table", function (req, res) {
  0
  let choice = req.params.table;

  console.log(choice);

  for (var i = 0; i < tables.length; i++) {
    if (choice === tables[i].phone) {
      return res.json(tables[i]);
    }
  }

  return res.json(false);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});