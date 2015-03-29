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
          var id = data.id;
          var query = connection.query("SELECT * from application_data where id='"+id+"';", function(err, rows){

                                if(rows.length == 0){
                                  var query = connection.query("INSERT INTO application_data set ? ",data, function(err, rows)
                                               {
                                                 callback({'response':"Sucessfully added"});
                                               });

                                }
                                else
                                {
                        //          var query = connection.query("UPDATE application_data set ? ",data, function(err, rows)
                        //                     {
                                          callback({'response':"Sucessfully added"});
                        //                     });
                                }

                                });
                              });
}


exports.insert_iostat_data_in_db = function(data,callback) {

        var id=data.id
        var cpu=data.cpu
        var disk=data.disk

        /////////////////////////////////////////CPU DATA///////////////////////////////////////
        var query = connection.query("SELECT * from iostat_cpu_data where id='"+id+"';", function(err, rows){

        if(rows.length == 0){
          var query = connection.query("INSERT INTO iostat_cpu_data set ? ",cpu, function(err, rows)
                         {
                           callback({'response':"Sucessfully added"});
                         });

        }
        else
        {
//          var query = connection.query("UPDATE application_data set ? ",data, function(err, rows)
//                     {
                  callback({'response':"Sucessfully added"});
//                     });
        }

          });

          /////////////////////////////////////////////////DISK DATA////////////////////////////////

          var query = connection.query("SELECT * from iostat_disk_data where id='"+id+"';", function(err, rows){

          if(rows.length == 0){
            var query = connection.query("INSERT INTO iostat_disk_data set ? ",disk, function(err, rows)
                           {
                             callback({'response':"Sucessfully added"});
                           });

          }
          else
          {
  //          var query = connection.query("UPDATE application_data set ? ",data, function(err, rows)
  //                     {
                    callback({'response':"Sucessfully added"});
  //                     });
          }

            });    



}
