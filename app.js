var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');



var Users = [
    {username:'Aliaxandra',
    password:'1111',
    id:'1'},
    {
        username: 'a',
        password: 'b',
        id: 'c',
    }
];

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

var articleModel = require('./articleModel');

app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: 'ThisIsMySecret',
    cookie:{
        maxAge: 2628000000
    }
}))


passport.use(new LocalStrategy(
    function(username, password, done) {
      const user = Users.find(item => item.username === username);
      if(!user){
          return done(null, false)
      }
      if(user.password !== password){
          return done(null, false);
      }
      return done(null, user);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    const user = Users.find(item => item.id === id);
    if(user) {
        return done(null, user);
    }
    done(null, false);
});

app.post('/login', (req, res) => {
    passport.authenticate('local', (err, user) => {
        if (!user) {
            return res.status(401).end();
        }
        const sess = req.session;
        sess.user = user;
        sess.save(() => {});
        return res.status(200).send(user);
    })(req, res);
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
});


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
    var sess = req.session;
    if(sess.user) {
        res.status(200).send(sess.user.username);
        return;
    }
    res.status(401).end();

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
