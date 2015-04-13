var request = require('request');
var mysql = require('mysql');
var connection = mysql.createConnection(
                                        {
                                        host     : '152.46.19.52',
                                        user     : 'root',
                                        password : '',
                                        database : 'HadoopPerformanceMonitoring',
                                        }
                                        );


connection.connect();


exports.insert_in_db = function(data,callback) {


      var id = data.id;
      var query = connection.query("SELECT * from node_data where id='"+id+"';", function(err, rows){

                          if(rows.length == 0)
                          {
                                var query = connection.query("INSERT INTO node_data set ? ",data, function(err, rows)
                                       {
                                       callback({'response':"Sucessfully added"});
                                       });

                          }
                          else
                          {
                                var query = connection.query("UPDATE node_data set ? WHERE id = ?",[data,id], function(err, rows)
                                       {
                                    callback({'response':"Sucessfully added"});
                                       });
                          }
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
                                  var query = connection.query("UPDATE application_data set ? WHERE id = ?",[data,id], function(err, rows)
                                             {
                                          callback({'response':"Sucessfully added"});
                                             });
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
          var query = connection.query("UPDATE iostat_cpu_data set ? WHERE id= ?",[cpu,id], function(err, rows)
                     {
                  callback({'response':"Sucessfully added"});
                     });
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

          var query = connection.query("UPDATE iostat_disk_data set ? WHERE id= ?",[disk,id], function(err, rows)
                       {
                    callback({'response':"Sucessfully added"});
                       });
          }

            });

}


/////////////////////Cluster Metrics Data///////////////////////////////////

exports.insert_cluster_met_data_in_db = function(data,callback) {

      var query = connection.query("SELECT * from cluster_metric_data where id='"+id+"';", function(err, rows){

                              if(rows.length == 0){
                                var query = connection.query("INSERT INTO cluster_metric_data set ? ",data, function(err, rows)
                                             {
                                                callback({'response':"Sucessfully added"});
                                             });
                              }
                              else
                              {
                                var query = connection.query("UPDATE cluster_metric_data set ? WHERE id = ?",[data,id], function(err, rows)
                                           {
                                                callback({'response':"Sucessfully updated"});
                                           });
                              }
                              });

}


/////////////////////Cluster Info Data///////////////////////////////////

exports.insert_cluster_info_data_in_db = function(data,callback) {

      var data = data.clusterInfo
      var id = data.id
      var query = connection.query("SELECT * from cluster_info_data where id='"+id+"';", function(err, rows){

                                if(rows.length == 0){
                                  var query = connection.query("INSERT INTO cluster_info_data set ? ",data, function(err, rows)
                                               {
                                                  callback({'response':"Sucessfully added"});
                                               });

                                }
                                else
                                {
                                  var query = connection.query("UPDATE cluster_info_data set ? WHERE id = ?",[data,id], function(err, rows)
                                             {
                                                  callback({'response':"Sucessfully updated"});
                                             });
                                }
                                });
}


/////////////////////DFS Data///////////////////////////////////

exports.insert_dfs_data_in_db = function(data,callback) {

    for (key in data)
    {

      console.log(key)

      var query = connection.query("SELECT * from DFS_health_data where Name='"+key+"';", function(err, rows){
        console.log(rows);
                                if(rows.length == 0){
                                  var query = connection.query("INSERT INTO DFS_health_data set ? ",data[key], function(err, rows)
                                               {
                                                  callback({'response':"Sucessfully added"});
                                               });

                                }
                                else
                                {
                                  var query = connection.query("UPDATE DFS_health_data set ? WHERE Name= ?",[data[key],key], function(err, rows)
                                             {
                                                  callback({'response':"Sucessfully updated"});
                                             });
                                }
                                });
   }



    callback({'response':"Sucessfully updated"});

}
