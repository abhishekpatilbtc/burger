var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {

  selectAll: function (tableName, cb) {
      let queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableName], (error, results) => {
          if (error) throw error;
          // console.log(results)
          cb(results);
      })
  },
  insertOne: function (tableName, burgerName, cb) {
      let queryString = "INSERT INTO ??(burger_name) values(?)";
      connection.query(queryString, [tableName, burgerName], (error, results) => {
          if (error) throw error;
          cb(results);
      })
  },
  updateOne: function (tableName, devouredTrue, id, cb) {
      let queryString = "UPDATE ?? SET ? WHERE ?";
      let devoured = { devoured: devouredTrue };
      let idvar = { id: id };
      connection.query(queryString, [tableName, devoured, idvar], (error, results) => {
          if (error) throw error;
          cb(results);
      })
  }
}

module.exports = orm;
