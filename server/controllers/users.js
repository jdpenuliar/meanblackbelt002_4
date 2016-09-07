var mongoose = require("mongoose");
var User = mongoose.model("User");
module.exports = (function(){
	return{
		index: function(req,res){
			User.find({},function(err,data){
				if(err){
					res.json(err);
				}else{
					res.json(data);
				}
			});
		}
	}
})();