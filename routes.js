var express = require("express");
var path = require("path");

var app = express();
var PORT = 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "rest.html"));
  });

app.get("/api/:tables", function(req, res) {
    let choice = req.params.tables;
  
    console.log(choice);
  
    for (var i = 0; i < tables.length; i++) {
      if (choice === tables[i].routeName) {
        return res.json(tables[i]);
      }
    }
  
    return res.json(false);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });