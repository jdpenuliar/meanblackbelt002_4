var mongoose = require("mongoose");
var Product = mongoose.model("Product");
module.exports = (function(){
	return{
		index: function(req,res){
			Product.find({}).populate("productBids").exec(function(err,data){
				if(err){
					res.json(err);
				}else{
					Product.populate(data,{path: "productBids.bider", model:"User"},function(err,data){
						if(err){
							res.json(err);
						}else{
							res.json(data);
						}
					});
				}
			});
		}
	}
})();