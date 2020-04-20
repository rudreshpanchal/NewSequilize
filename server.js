const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


require("./app/routes/tutorial.routes")(app);
require("./app/routes/author.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");

//db.sequelize.sync({ force: true }).then(() => {
  //  console.log("Drop and re-sync db.");
  //});
/*{
"id": 1,
"title": "new title paste",
"description": "new description",
"published": true,
"createdAt": "2020-04-07T13:52:20.000Z",
"updatedAt": "2020-04-07T13:52:20.000Z"


var Categories = Product.hasMany(Tag, {as: 'categories'});

Product.create({
  id: 1,
  title: 'Chair',
  categories: [
    {id: 1, name: 'Alpha'},
    {id: 2, name: 'Beta'}
  ]
}, {
  include: [{
    model: Categories,
    as: 'categories'
  }]
})
}*/