const db = require('./connection');

const useriddetails = {
getAllUseriddetails:function(){
		//const that = this;
		return new Promise(async (resolve, reject)=>{	//fat arrow functions encompass the surrounding object's context ("this")
			const q = 'select * from useriddetails';
			try{
				const result = await this.query(q); //or const result = await that.query(q);
				resolve(result);
			}catch(err){
				reject(err);
			}
		});
	},
	getUseriddetailsById:function(id){
		//const that = this;
		return new Promise(async (resolve, reject)=>{
			const q = 'select * from useriddetails where userId='+id;
			try{
				const result = await this.query(q);	//or const result = await that.query(q);
				resolve(result);
			}catch(err){
				reject(err);
			}
		});
	},
	query:function(q){
		return new Promise(function(resolve, reject){
			db.query(q,function(err,result){
				if (err)
					reject(err);
				else
					resolve(result);
			});
		});
	}
};

module.exports = useriddetails;
