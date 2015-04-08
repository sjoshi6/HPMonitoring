var requests = require('./requests');
var request = require('request');

module.exports = function(app) {

app.post('/nodedata',function(req,res){

               requests.insert_in_db(req.body.node,function (value) {
                              console.log('Responseadded');
                              res.json('');
                              });
});

app.post('/appsdata',function(req,res){

                requests.insert_app_data_in_db(req.body.apps,function(value){
                            console.log('App Data Added');
                            res.json('');
                            });
});

app.post('/iostatdata',function(req,res){

                requests.insert_iostat_data_in_db(req.body,function(value){
                          console.log('Iostat data added');
                          res.json('');
                          });
});


app.post('/clustermetricsdata',function(req,res){

                requests.insert_cluster_met_data_in_db(req.body,function(value){
                          console.log('Cluster Metrics data added');
                          res.json('');
                          });
});


app.post('/clusterinfodata',function(req,res){

                requests.insert_cluster_info_data_in_db(req.body,function(value){
                          console.log('Cluster Info data added');
                          res.json('');
                          });
});


}
