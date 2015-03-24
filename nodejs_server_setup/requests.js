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
exports.insert_in_db = function(data,callback) {

       var query = connection.query("INSERT INTO node_data set ? ",data, function(err, rows)
                                    {
                                    callback({'response':"Sucessfully added"});
                                    });
}

exports.insert_app_data_in_db = function(data,callback) {

      var apps = data.app;

      apps.forEach(function(data){
          console.log(data);
      });
      //var query = connection.query("INSERT INTO node_data set ? ",data, function(err, rows)
      //                              {
      //                              callback({'response':"Sucessfully added"});
      //                              });
}
