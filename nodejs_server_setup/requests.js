var request = require('request');
var mysql = require('mysql');
var connection = mysql.createConnection(
                                        {
                                        host     : 'localhost',
                                        user     : 'root',
                                        password : '',
                                        database : 'HadoopPerformanceMonitoring',
                                        }
                                        );

connection.connect();
exports.insert_in_db = function(data) {
  //  var data = {
  //      name    : name,
  //      mobno :  mobno,
  //      reg_id   : reg_id
  //  };

       var query = connection.query("INSERT INTO NODE_TABLE set ? ",data, function(err, rows)
                                    {
                                    callback({'response':"Sucessfully added"});
                                    });
}
