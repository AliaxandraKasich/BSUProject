var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var articleModel = require('./articleModel');

app.get('/article', function (req, res) {
  res.json(articleModel.getArticles());
});

app.get('/articleWithParams', function (req, res) {
  var skip = req.body.skip;
  var top = req.body.top;
  res.json(articleModel.getArticles(skip, top));
});

app.get('/articleCount', function (req, res) {
  res.json(articleModel.getArticlesCount());
});

app.get('/articleFilter/:author/:createdAt', function (req, res) {
  var filter = {
    author: req.params.author,
    createdAt: req.params.createdAt
  }
  console.log(filter.author);
  console.log(filter.createdAt);
  res.json(articleModel.getArticles(undefined, undefined, filter));
});
//query запрос

app.get('/user', function (req, res) {
  res.json(articleModel.userName);
})

app.get('/article/:id', function (req, res) {
  res.json(articleModel.getArticle(req.params.id));
});

app.post('/article', function (req, res) {
  let article = {
    img: req.body.img,
    title: req.body.title,
    summary: req.body.summary,
    createdAt: Date.now(),
    author: articleModel.userName,
    content: req.body.content
  };
  if (articleModel.validateArticle2(article)) {
    console.log('зашли в йнкцию');
    articleModel.addArticle(article);
    res.json(article);
  } else {
    article = null;
    res.json(article);
  }
});

app.put('/article/:id', function (req, res) {
  var article = {};
  article.title = req.body.title;
  article.img = req.body.img;
  article.summary = req.body.summary;
  article.content = req.body.content;

  if (articleModel.validateArticle2(article)) {
    articleModel.editArticle(req.params.id, article)
    res.json(articleModel.getArticle(req.params.id));
  } else {
    article = null;
    res.json(article);
  }
});

app.put('/article', function (req, res) {
  var id = req.query.id || req.body.id;
  var article = articleModel.articles.find(function (article) {
    return article.id === id;
  })
  article.title = req.body.title;
  article.img = req.body.img;
  article.summary = req.body.summary;
  article.content = req.body.content;
  res.json(article);
});

app.put('/userNameExit', function (req, res) {
  articleModel.userName = req.body.user;
  res.sendStatus(200);
})

app.put('/userNameEnter', function (req, res) {
  articleModel.userName = req.body.user;
  res.json(articleModel.userName);
})

app.delete('/article', function (req, res) {
  var id = req.query.id || req.body.id;
  articleModel.articles = articleModel.articles.filter(function (article) {
    return article.id !== id;
  })
  articleModel.removeArticle(id);
  res.sendStatus(200);
});

app.delete('/article/:id', function (req, res) {
  var articles = articleModel.articles.filter(function (article) {
    return article.id !== req.params.id;
  })
  res.sendStatus(200);
});

app.patch('/article', function (req, res) {
  var article = articleModel.articles.find(function (article) {
    return req.body.id === article.id;
  });
  if (req.body.img) {
    article.img = req.body.img;
    console.log(req.body.img);
  }

  if (req.body.title) {
    article.title = req.body.title;
  }
  if (req.body.summary) {
    article.summary = req.body.summary;
  }
  if (req.body.content) {
    article.content = req.body.content;
  }
  if (articleModel.validateArticle(article)) {
    articleModel.editArticle(req.body.id, article);
    res.json(article);
  }
});

app.use(express.static('public/UI'));

app.get('/', function (req, res) {
  res.send('index.html');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});
