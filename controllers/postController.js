const Post = require('../models/MY_model');
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
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