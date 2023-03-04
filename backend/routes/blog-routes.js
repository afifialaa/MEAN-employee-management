const blogsController = require('../controllers/blogs-controller');

const express = require('express')
const router = express.Router()

router.post('/post',  blogsController.createPost)
router.get('/post',  blogsController.readPost)
router.delete('/post',  blogsController.deletePost)
router.put('/post/{article_id}', blogsController.deletePost)
router.get('/posts', blogsController.readAll);

/** Post Comments  */

module.exports = router;
