var requests = require('./requests');
var request = require('request');

module.exports = function(app) {

app.post('/nodedata',function(req,res){

               requests.insert_in_db(req.body.node,function (value) {
                              console.log('Responseadded');
                              res.json('');
                              });
               });

}
