var mysql      = require('mysql');
var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : '980617',
 database : 'comics'
});

var workNum=0;

connection.connect();

exports.greet = function(){
 connection.query('SELECT * FROM allwork', function (error, results, fields) {
  if (error){
      console.log(error);
  }
  console.log(results);
 });
};
/*
  create comics and inititalize
*/
exports.createWork=function(title,owner){
  var inserted_id;
  console.log(`Connected!`);
  connection.query(`INSERT INTO allwork (title,owner) VALUES(?,?)`,[title,owner],function (error,rows,fields){
    if(error){
      console.log(error);
    }
    else {
      inserted_id=rows.insertId;
      var qry=`CREATE TABLE work${inserted_id} (
        id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        story TEXT,
        image_id INT(20),
        board INT(20),
        parent_id INT(20)
      );`;
      connection.query(qry,function (error,results){
        if(error){
          console.log(error);
        }
        else{
          console.log(`Successfully create`);
        }
      });
    }
  });
};
/*
  add image file, story,and parent in work# table
*/
exports.addToleft=function(current_id,image,story){};
exports.addToleft=function(current_id,image,story){};
exports.getWork=function(id){
  connection.query(`SELECT * FROM work?`,[id],function (error,results,fields){
    if(error){
      throw error;
    }
    else{
      console.log(results);
    }
  });

};
exports.delWork=function(title){

};
