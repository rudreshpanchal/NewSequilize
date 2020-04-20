module.exports = app => {
    const authors = require("../controllers/author.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", authors.create);
  
    // Retrieve all Tutorials
    router.get("/", authors.findAll);
    
    // Retrieve a single Tutorial with id
    router.get("/:id", authors.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", authors.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", authors.delete);
  
     app.use('/api/authors', router);
  };