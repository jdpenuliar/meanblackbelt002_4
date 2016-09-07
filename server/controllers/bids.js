var mongoose = require("mongoose");
var Bid = mongoose.model("Bid");
module.exports = (function(){
	return{
		index: function(req,res){
			Bid.find({},function(err,data){
				if(err){
					res.json(err);
				}else{
					res.json(data);
				}
			});
		}
	}
})();