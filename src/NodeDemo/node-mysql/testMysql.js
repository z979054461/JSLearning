var mysql      = require('mysql');
const config = require('./config');

var connection = mysql.createConnection(config);
 
connection.connect();
 
connection.query('select * from pets', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results,fields);
});