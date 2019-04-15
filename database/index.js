const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getStereo = function (id, callback) {
  let queryString  = `select * from stereos where id = ${id}`;
  connection.query(queryString, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    let result = results[0];
    callback(result);
  });
};


module.exports = { connection, getStereo };