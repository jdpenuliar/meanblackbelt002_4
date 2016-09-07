var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BidSchema = new Schema({
	bider: {type: Schema.ObjectId, ref: "User"},
	bid: {type: Number},
	biderProduct: {type: Schema.ObjectId, ref: "Product"}
},{timestamps: true});
mongoose.model("Bid",BidSchema);