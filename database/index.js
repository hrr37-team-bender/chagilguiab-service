const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllStereos = function (callback) {
  let queryString  = `select * from stereos`;
  connection.query(queryString, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(results);
  });
};


module.exports = { connection, getAllStereos };