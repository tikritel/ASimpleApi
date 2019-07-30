const db = {
	connection:null,
	init:function(){
		const mysql = require('mysql');
		this.connection = mysql.createConnection({
//            host     :'35.234.117.223',
//            user      : 'annamaria',
//			password   :'tikritel1991',
//            database   :'annamaria_database',
//            port: 3306
//			
            host     : 'localhost',
			user     : 'root',
            password : 'NEW_PASSWORD_HERE',
			database : 'annamaria2_scema',
            port: 3306
		});
		this.connection.connect();
	},
	query:function(q,callback){
		this.connection.query(q, function (error, results, fields) {
			if (error) callback(error);
			callback(null,results);
		});
	}
};

module.exports=db;

