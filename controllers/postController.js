const Post = require('../models/MY_model');
var path = require('path');
exports.index = function(req, res) {

    res.sendFile(path.resolve('views/index.html'));
};


exports.createPost = (req,res) =>{
	const post = new Post(req.body);
	// console.log('Creating post: ',req.body)
	post.save((err,result)=>{
		if(err){
			return res.status(400).json({
				error:err
			});
		}
		res.status(200).json({
			post:result
		})
	});
}


