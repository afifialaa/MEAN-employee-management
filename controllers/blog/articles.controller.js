const Article = require('../../models/article.model');

let debugBlog = require('debug')('worker:debugBlog');

/**
 *@returns {JSON} res
 */
function createArticle(req, res) {
    let articleObj = {
        user: req.email,
        title: req.body.title,
        content: req.body.content,
        postedOn: new Date()
    }

    let article = new Article(articleObj)

    article.save((err, article) => {
        if (err) {
            debugBlog('Failed to save article', err);
            return res.status(409).json({ err: 'Failed to save article' });
        } else {
            debugBlog('Article was created');
            return res.status(201).json({ msg: 'Article was created' });
        }
    })
}

function deleteArticle(req, res) {
    Article.findByIdAndRemove(req.query.articleId, err => {
        if (err) {
            debugBlog('Failed to delete article');
            return res.json({ err: 'Failed to delete article' });
        } else {
            debugBlog('Article was deleted');
            return res.status(409).json({ msg: 'Article was deleted' });
        }
    });
}

function updateArticle(req, res) {
    let article = {
        articleId: req.body.articleId,
        user: req.email,
        title: req.body.title,
        content: req.body.content,
    }

    Article.findOneAndUpdate({ user: article.user, '_id': article.articleId }, article, (err) => {
        if (err) {
            debugBlog('Failed to update artilce');
            res.status(402).json({ err: 'Failed to update article' });
        } else {
            debugBlog('Article was updated');
            res.status(200).json({ msg: 'Article was updated' });
        }
    });
}

function fetchArticles(req, res) {
    Article.find({ user: req.email }, (err, docs) => {
        if (err) {
            debugBlog('Failed to fetch articles');
            res.status(402).json({ err: 'Failed to fetch tasks' });
        } else {

            debugBlog('Articles were fetched');
            res.status(200).json({ articles: docs });
        }
    })
}

function fetchAllArticles(req, res) {

    Article.find({}).sort('-postedOn').exec( (err, docs)=>{
        if (err) {
            debugBlog('Failed to fetch articles');
            res.status(402).json({ err: 'Failed to fetch tasks' });
        } else {
            debugBlog('Articles were fetched');
            res.status(200).json({ articles: docs });
        }
    })
}

module.exports = {
    createArticle,
    deleteArticle,
    updateArticle,
    fetchArticles,
    fetchAllArticles
}
