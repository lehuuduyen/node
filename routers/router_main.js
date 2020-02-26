const express = require('express');
const router =express.Router();
const postController = require('../controllers/postController');

router.get('/',postController.index)

router.get('/get_json',function(req,res){
	let json = [
			{"title":"lehuuduyen"},
			{"title":"duyenle huu "},

		];
	res.send(json)
})
router.post('/post',postController.createPost);
module.exports = router