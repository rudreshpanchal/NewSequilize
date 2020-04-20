
module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define("author", {
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      }     
    });
  
    return Author;
  };

  
