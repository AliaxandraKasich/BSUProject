"use strict";
var articleModel =( function () {
    var articles = [];

    var userName = 'Valentina';

    var maxId = articles.length;

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 5;
        filterConfig = filterConfig || {};
        var _articles;
        if (filterConfig.author !== undefined && filterConfig.createdAt !== undefined) {
            _articles = articleModel.articles.filter(function (article) {
                return article.author === filterConfig.author;
            })
            _articles = _articles.filter(function (article) {
                var date = article.createdAt;
                date.setHours(3, 0, 0, 0);
                return filterConfig.createdAt.getTime() === date.getTime();
            })
        }
        else {
            if (filterConfig.author !== undefined) {
                _articles = articleModel.articles.filter(function (article) {
                    return article.author === filterConfig.author;
                })
            }
            else {
                if (filterConfig.createdAt !== undefined) {
                    _articles = articleModel.articles.filter(function (article) {
                        var date = article.createdAt;
                        date.setHours(3, 0, 0, 0);
                        return filterConfig.createdAt.getTime() === date.getTime();
                    })
                }
                else {
                    _articles = articleModel.articles;
                }
            }

        }
        _articles.sort(function (a, b) {
            return b.createdAt - a.createdAt;
        })
        return _articles.slice(skip, top + skip);
    }

    function getArticles2(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || articleModel.articles.length;
        filterConfig = filterConfig || {};
        var _articles;
        if (filterConfig.author !== undefined && filterConfig.createdAt !== undefined) {
            _articles = articleModel.articles.filter(function (article) {
                return article.author === filterConfig.author;
            })
            _articles = _articles.filter(function (article) {
                var date = article.createdAt;
                date.setHours(3, 0, 0, 0);
                return filterConfig.createdAt.getTime() === date.getTime();
            })
        }
        else {
            if (filterConfig.author !== undefined) {
                _articles = articleModel.articles.filter(function (article) {
                    return article.author === filterConfig.author;
                })
            }
            else {
                if (filterConfig.createdAt !== undefined) {
                    _articles = articleModel.articles.filter(function (article) {
                        var date = article.createdAt;
                        date.setHours(3, 0, 0, 0);
                        return filterConfig.createdAt.getTime() === date.getTime();
                    })
                }
                else {
                    _articles = articleModel.articles;
                }
            }

        }
        _articles.sort(function (a, b) {
            return b.createdAt - a.createdAt;
        })
        return _articles.slice(skip, top + skip);
    }

    function getArticle(id) {
        id = id || null;
        var article;
        if (typeof id === 'string') {
            if (id) {
                for (var i = 0; i < articleModel.articles.length; i++) {
                    if (id.localeCompare(articleModel.articles[i].id) == 0) {
                        return article = articleModel.articles[i];
                    }
                }
            }
        }
    }

    function setUserName(name) {
        userName = name;
    }

    function getUserName() {
        return userName;
    }

    function validateArticle(article) {
        article = article || {};
        return (('id' in article == true) && (typeof article.id === 'string') && (article.id !== '') && (article.summary !== '') && (article.content !== '') && ('title' in article == true) && (typeof article.title === 'string' ) && ( article.title.length < 100) && ('summary' in article == true) && (typeof article.summary === 'string' ) && ( article.summary.length < 200) && ('createdAt' in article == true) && ((article.createdAt instanceof Date) == true) && ('author' in article == true) && (typeof article.author === 'string') && ('content' in article == true) && (typeof article.content === 'string'));
    }

    function validateArticle2(article) {
        article = article || {};
        return (('title' in article == true) && (typeof article.title === 'string' ) && (article.title !== '' ) && ( article.title.length < 101) && ('summary' in article == true) && (typeof article.summary === 'string' ) && (article.summary !== '' ) && ( article.summary.length < 200) && ('content' in article == true) && (typeof article.content === 'string') && (article.content !== ''));
    }

    function editArticle(id, article) {
        id = id || null;
        article = article || {};
        var index;
        for (var i = 0; i < articleModel.articles.length; i++) {
            if (id == articleModel.articles[i].id) {
                index = i;
                if (validateArticle(articleModel.articles[i]) == true) {
                    if (article.title !== undefined) {
                        articleModel.articles[i].title = article.title;
                    }
                    if (article.summary !== undefined) {
                        articleModel.articles[i].summary = article.summary;
                    }
                    if (article.content !== undefined) {
                        articleModel.articles[i].content = article.content;
                    }
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }

    function getId(article) {
        return article.id;
    }

    function removeArticle(id) {
        id = id || null;
        for (var i = 0; i < articleModel.articles.length; i++) {
            if (id === articleModel.articles[i].id) {
                console.log(articleModel.articles[i]);
                articleModel.articles.splice(i, 1);
                //delete articleModel.articles[i];
                return true;
            }
        }
        return false;
    }

    function addArticle(article) {
        article = article || {};
        article.id = (maxId + 1) + '';
        if (validateArticle(article) === true) {
            articleModel.articles.push(article);
            console.log(articleModel.articles);
            maxId++;
            return true;
        }
        else {
            return false;
        }
    }

    function getArticlesCount() {
        return articleModel.articles.length;
    }


    return {
        articles: articles,
        getArticles: getArticles,
        getArticle: getArticle,
        validateArticle: validateArticle,
        validateArticle2: validateArticle2,
        editArticle: editArticle,
        removeArticle: removeArticle,
        addArticle: addArticle,
        getUserName: getUserName,
        setUserName: setUserName,
        getId: getId,
        getArticlesCount: getArticlesCount,
        getArticles2: getArticles2,
        //workerWithLocal: workerWithLocal
        //workerWithLocal:workerWithLocal
    }
}
)();

var tempId = '';

var htmlControler = function () {

    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;

    function init() {
        ARTICLE_TEMPLATE = document.getElementById('template-article-list-item');
        ARTICLE_LIST_NODE = document.getElementById('article-list');
        console.log('init functon');
        console.log(ARTICLE_LIST_NODE);
        console.log(ARTICLE_TEMPLATE);
    }

    function renderArticle(article) {
        var template = ARTICLE_TEMPLATE;
        template.querySelector('.block').dataset.id = article.id;
        template.querySelector('.name').textContent = article.title;
        template.querySelector('.img-news').src = article.img;
        template.querySelector('.text-news').textContent = article.summary;
        template.querySelector('.text-author').textContent = article.author;
        template.querySelector('.all').textContent = article.content;
        // news.querySelector('.all-text-news').textContent = article.content;
        template.querySelector('.text-date').textContent = formatDate(article.createdAt);
        return template.querySelector('.block').cloneNode(true);
    }

    function renderArticle2(article) {
        var template = ARTICLE_TEMPLATE;
        template.querySelector('.name').textContent = article.title;
        template.querySelector('.img-news').src = article.img;
        template.querySelector('.text-news').textContent = article.summary;
        template.querySelector('.all').textContent = article.content;
        // news.querySelector('.all-text-news').textContent = article.content;
        return template.querySelector('.block').cloneNode(true);
    }

    function workerWithUser(userName) {
        if (userName) {
            document.querySelector('.your-name').textContent = userName;
            document.querySelector('#button-exit').textContent = 'Выйти';
            document.querySelector('.content2').style.display = 'none';

        }
        else {
            document.querySelector('.your-name').textContent = '';
            document.querySelector('#button-exit').textContent = 'Войти';
            document.querySelector('.add-news').style.display = 'none';
            var tempdelete = document.querySelectorAll('.delete');
            for (var i = 0; i < tempdelete.length; i++) {
                tempdelete[i].style.display = 'none';
            }
            var tempredacte = document.querySelectorAll('.redacte');
            for (var i = 0; i < tempredacte.length; i++) {
                tempredacte[i].style.display = 'none';
            }
            document.querySelector('.content2').style.display = 'none';
        }
    }

    function formatDate(d) {
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }

    function showArticles(articles) {
        ARTICLE_LIST_NODE.innerHTML = '';
        articles.forEach(function (node) {
            ARTICLE_LIST_NODE.appendChild(renderArticle(node));
        });
        // document.querySelector('#template-news').style.display = 'none';
    }

    function addArticle(article) {
        ARTICLE_LIST_NODE.appendChild(renderArticle(article));
    }

    function removeArticle(id) {
        var node = document.querySelector('[data-id~="' + id + '"]');
        if (node) {
            node.remove();
        }
    }

    function editArticle(id, article) {
        var node = document.querySelector('[data-id~="' + id + '"]');
        if (node) {
            node.innerHTML = renderArticle2(article).innerHTML;
        }

    }

    return {
        showArticles: showArticles,
        addArticle: addArticle,
        removeArticle: removeArticle,
        editArticle: editArticle,
        init: init,
        workerWithUser: workerWithUser,
        /* deleteButtonUser: deleteButtonUser,
         showButtonUser: showButtonUser,
         deleteButtonOnNews: deleteButtonOnNews,
         redacteButtonUser: redacteButtonUser,
         apllyRedacteButtonUser: apllyRedacteButtonUser,
         filterName : filterName,
         addButtonUser:addButtonUser,
         apllyAddButtonUser:apllyAddButtonUser,
         redacteButtonOnNews:redacteButtonOnNews
         */
        //handleDeleteBtnClick:handleDeleteBtnClick
    }

}


document.addEventListener('DOMContentLoaded', startApp);


function startApp() {

        if (!localStorage.getItem('articles')) {
            localStorage.setItem('articles', JSON.stringify(fillArticles.articles));
            articleModel.articles = fillArticles.articles;
        }
        else {
            articleModel.articles = JSON.parse(localStorage.getItem('articles'));
            articleModel.articles.forEach(item => item.createdAt = new Date(item.createdAt));
        }

    workerWithHtml.init();
    workerWithHtml.workerWithUser(articleModel.getUserName());
    workerWithHtml.showArticles(articleModel.getArticles());
    console.log(articleModel.getArticles());
    console.log(articleModel.articles);

    apllyAddButtonUser();
    allFunctions();
    exitButton();
    enterButton();
    apllyRedacteButtonUser();
    redacteButtonOnNews();
    callNewsPortal();
    buttonError();

    var paginationParams = pagination.init(renderArticlesPag);

    renderArticlesPag(paginationParams.skip, paginationParams.top);


}

//var workerWithArticles = articleModel();
var workerWithHtml = htmlControler();


function allFunctions() {
    deleteButtonUser();
    showButtonUser();
    deleteButtonOnNews();
    redacteButtonUser();
    filterName();
    addButtonUser();
}

/*
function showArticles(skip, top, filter) {
    var array = articleModel.getArticles(skip, top, filter);
    workerWithHtml.showArticles(array);
}

function addArticle(article) {
    var temp = articleModel.addArticle(article);
    workerWithHtml.addArticle(article);
    var array = articleModel.getArticles();
    workerWithHtml.showArticles(array);
}

function removeArticle(id) {
    var temp = articleModel.removeArticle(id);
    workerWithHtml.removeArticle(id);
    return temp;
}

function editArticle(id, article) {
    var temp = articleModel.editArticle(id, article);
    var newArticle = articleModel.getArticle(id);
    console.log(newArticle);
    workerWithHtml.editArticle(id, newArticle);
    return temp;
}

function setUser(userName) {
    workerWithHtml.workerWithUser(articleModel.getUserName());
}
*/

function callNewsPortal() {
    var checkbox = document.querySelector("#logo");
    checkbox.addEventListener('click', handleCallNewsPortal);

    function handleCallNewsPortal(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        if (document.querySelector('.your-name').textContent != '') {
            console.log(document.querySelector('.your-name').textContent);
            document.getElementById('article-list').style.display = 'block';
            document.getElementById('redacte-form').style.display = 'none';
            document.getElementById('redacte-form2').style.display = 'none';
            document.getElementById('template-news').style.display = 'none';

            document.querySelector('.filter').style.display = 'block';
            document.querySelector('.block-filter').style.display = 'block';
            document.querySelector('.work_with-error').style.display = 'none';
            //document.getElementById('pagination-show-more').style.display='inline';
            var array = articleModel.getArticles();
            workerWithHtml.showArticles(array);

            if (document.getElementById('article-list').childElementCount != articleModel.getArticlesCount()) {
                document.getElementById('pagination-show-more').style.display = 'inline';
                document.querySelector('.pagination-bar').style.display = 'inline';
            }
            else {
                document.getElementById('pagination-show-more').style.display = 'none';
            }
        }
        else {
            document.getElementById('article-list').style.display = 'block';
            document.getElementById('redacte-form').style.display = 'none';
            document.getElementById('redacte-form2').style.display = 'none';
            document.getElementById('template-news').style.display = 'none';
            document.querySelector('.filter').style.display = 'block';
            document.querySelector('.block-filter').style.display = 'block';

            document.getElementById('pagination-show-more').style.display = 'inline';
            document.querySelector('.pagination-bar').style.display = 'inline';
            //var array = articleModel.getArticles();
            //workerWithHtml.showArticles(array);
            document.querySelector('.your-name').textContent = '';
            document.querySelector('#button-exit').style.display = 'inline';
            document.querySelector('#button-exit').textContent = 'Войти';
            document.querySelector('.add-news').style.display = 'none';
            var tempdelete = document.querySelectorAll('.delete');
            for (var i = 0; i < tempdelete.length; i++) {
                tempdelete[i].style.display = 'none';
            }
            var tempredacte = document.querySelectorAll('.redacte');
            for (var i = 0; i < tempredacte.length; i++) {
                tempredacte[i].style.display = 'none';
            }
            document.querySelector('.content2').style.display = 'none';
            document.querySelector('#hello-world').style.display = 'none';
            document.querySelector('.content3').style.display = 'none';
            var tempdelete2 = document.querySelectorAll('.delete2');
            for (var i = 0; i < tempdelete2.length; i++) {
                tempdelete2[i].style.display = 'none';
            }
            var tempredacte2 = document.querySelectorAll('.redacte');
            for (var i = 0; i < tempredacte2.length; i++) {
                tempredacte2[i].style.display = 'none2';
            }
        }
        allFunctions();
    }


}

function buttonError() {

    var checkbox = document.querySelector(".button-error");
    checkbox.addEventListener('click', handleCallNewsPortal);

    function handleCallNewsPortal(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        if (document.querySelector('.your-name').textContent != '') {
            console.log(document.querySelector('.your-name').textContent);
            document.getElementById('article-list').style.display = 'block';
            document.getElementById('redacte-form').style.display = 'none';
            document.getElementById('redacte-form2').style.display = 'none';
            document.getElementById('template-news').style.display = 'none';

            document.querySelector('.filter').style.display = 'block';
            document.querySelector('.block-filter').style.display = 'block';
            document.querySelector('.work_with-error').style.display = 'none';
            //document.getElementById('pagination-show-more').style.display='inline';

            if (document.getElementById('article-list').childElementCount != articleModel.getArticlesCount()) {
                document.getElementById('pagination-show-more').style.display = 'inline';
                document.querySelector('.pagination-bar').style.display = 'inline';
            }
            else {
                document.getElementById('pagination-show-more').style.display = 'none';
            }
        }
        else {
            document.getElementById('article-list').style.display = 'block';
            document.getElementById('redacte-form').style.display = 'none';
            document.getElementById('redacte-form2').style.display = 'none';
            document.getElementById('template-news').style.display = 'none';
            document.querySelector('.filter').style.display = 'block';
            document.querySelector('.block-filter').style.display = 'block';

            document.getElementById('pagination-show-more').style.display = 'inline';
            document.querySelector('.pagination-bar').style.display = 'inline';
            var array = articleModel.getArticles();
            workerWithHtml.showArticles(array);
            document.querySelector('.your-name').textContent = '';
            document.querySelector('#button-exit').style.display = 'inline';
            document.querySelector('#button-exit').textContent = 'Войти';
            document.querySelector('.add-news').style.display = 'none';
            var tempdelete = document.querySelectorAll('.delete');
            for (var i = 0; i < tempdelete.length; i++) {
                tempdelete[i].style.display = 'none';
            }
            var tempredacte = document.querySelectorAll('.redacte');
            for (var i = 0; i < tempredacte.length; i++) {
                tempredacte[i].style.display = 'none';
            }
            document.querySelector('.content2').style.display = 'none';
            document.querySelector('#hello-world').style.display = 'none';
            document.querySelector('.content3').style.display = 'none';
            var tempdelete2 = document.querySelectorAll('.delete2');
            for (var i = 0; i < tempdelete.length; i++) {
                tempdelete[i].style.display = 'none';
            }
            var tempredacte2 = document.querySelectorAll('.redacte');
            for (var i = 0; i < tempredacte.length; i++) {
                tempredacte[i].style.display = 'none2';
            }
        }
        allFunctions();
    }


}

function deleteButtonUser() {
    var articleList = document.getElementById('article-list');
    var articleListNode = document.querySelectorAll('.delete');
    for (var i = 0; i < articleListNode.length; i++) {
        articleListNode[i].addEventListener('click', handleDeleteBtnClick);
    }

    function handleDeleteBtnClick(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        var articleNodeToDelete = event.target.parentElement;
        console.log(articleNodeToDelete.dataset.id);

        document.getElementById('pagination-show-more').style.display = 'inline';
        document.querySelector('.pagination-bar').style.display = 'inline';
        articleModel.removeArticle(String(articleNodeToDelete.dataset.id));
        articleList.removeChild(articleNodeToDelete);
        localStorage.setItem('articles', JSON.stringify(articleModel.articles));
        //var array = articleModel.getArticles();
        //workerWithHtml.showArticles(array);
        allFunctions();
    }
}

function redacteButtonUser() {
    var articleList = document.getElementById('article-list');
    var articleListNode = document.querySelectorAll('.redacte');

    for (var i = 0; i < articleListNode.length; i++) {
        articleListNode[i].addEventListener('click', handleDeleteBtnClick);
    }

    function handleDeleteBtnClick(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        var articleNodeToRedacte = event.target.parentElement;
        tempId = articleNodeToRedacte.dataset.id;
        console.log(tempId);

        document.querySelector('#article-list').style.display = 'none';
        document.getElementById('redacte-form').style.display = 'block';
        document.getElementById('redacte-form').style.marginTop = '100px';
        document.body.style.height = '570px';
        document.querySelector('.content2').style.display = 'none';
        var temp = document.getElementById('redacte-form');
        temp.querySelector('.r-title').value = articleNodeToRedacte.querySelector('.name').textContent;
        temp.querySelector('.r-summary').value = articleNodeToRedacte.querySelector('.text-news').textContent;
        temp.querySelector('.r-img').value = articleNodeToRedacte.querySelector('.img-news').src;
        temp.querySelector('.r-content').value = articleNodeToRedacte.querySelector('.all').textContent;
        temp.querySelector('.r-data').value = articleNodeToRedacte.querySelector('.text-date').textContent;
        temp.querySelector('.r-author').value = articleNodeToRedacte.querySelector('.text-author').textContent;

        document.getElementById('pagination-show-more').style.display = 'none';
        document.querySelector('.filter').style.display = 'none';
        document.querySelector('.block-filter').style.display = 'none';
        document.querySelector('.work_with-error').style.display = 'none';

        allFunctions();
    }
}

function apllyRedacteButtonUser() {
    var article = document.getElementById('redacte-form');
    var articleNode = document.querySelector('.apply');
    articleNode.addEventListener('click', handleShowBtnClick);

    function handleShowBtnClick(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        var articleNodeToApply = event.target.parentElement;
        var tempArticle = articleModel.getArticle(tempId);
        console.log(document.querySelector(".r-title").value);
        tempArticle.title = document.querySelector(".r-title").value;
        tempArticle.summary = document.querySelector(".r-summary").value;
        tempArticle.img = document.querySelector(".r-img").value;
        tempArticle.content = document.querySelector(".r-content").value;
        if (articleModel.validateArticle2(tempArticle) == true) {

            workerWithHtml.editArticle(tempId, tempArticle);
            articleModel.editArticle(tempId, tempArticle);
            localStorage.setItem('articles', JSON.stringify(articleModel.articles));
            document.querySelector('#article-list').style.display = 'block';
            document.querySelector('.filter').style.display = 'block';
            document.querySelector('.block-filter').style.display = 'block';
            document.getElementById('redacte-form').style.display = 'none';
            document.getElementById('pagination-show-more').style.display = 'inline';
            document.querySelector('.pagination-bar').style.display = 'inline';
            tempId = '';
            var array = articleModel.getArticles();
            workerWithHtml.showArticles(array);
        }
        else {
            document.getElementById('redacte-form').style.display = 'none';
            document.querySelector('.work_with-error').style.display = 'block';
        }
        allFunctions();
    }
}

function addButtonUser() {
    var articleList = document.getElementById('article-list');
    var articleListNode = document.querySelector('.add-news');
    //document.getElementById('pagination-show-more').style.display='none';
    articleListNode.addEventListener('click', handleAddBtnClick);

    function handleAddBtnClick(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        document.querySelector('#article-list').style.display = 'none';
        document.getElementById('redacte-form2').style.display = 'block';
        var temp = document.getElementById('redacte-form2');
        document.getElementById('redacte-form2').style.marginTop = '100px';
        document.body.style.height = '570px';
        // temp.querySelector('#redacte-form').innerHTML = articleNodeToRedacte.querySelector('.block').innerHTML;
        temp.querySelector('.r-title').value = ' ';
        temp.querySelector('.r-summary').value = '';
        temp.querySelector('.r-img').value = '';
        temp.querySelector('.r-content').value = '';
        temp.querySelector('.r-data').value = new Date();
        temp.querySelector('.r-author').value = document.querySelector('.your-name').textContent;

        document.getElementById('pagination-show-more').style.display = 'none';
        document.querySelector('.filter').style.display = 'none';
        document.querySelector('.block-filter').style.display = 'none';
        allFunctions();
    }
}

function apllyAddButtonUser() {
    var article = document.getElementById('redacte-form2');
    var articleNode = document.querySelector('.apply2');
    articleNode.addEventListener('click', handleShowBtnClick);

    function handleShowBtnClick(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        var tempArticle = {};
        var articleNodeToAdd = event.target.parentElement;
        console.log(articleNodeToAdd.querySelector(".r-title").value);
        tempArticle.title = articleNodeToAdd.querySelector(".r-title").value;
        tempArticle.summary = articleNodeToAdd.querySelector(".r-summary").value;
        tempArticle.img = articleNodeToAdd.querySelector(".r-img").value;
        if (articleNodeToAdd.querySelector(".r-img").value == '') {
            tempArticle.img = ' http://yublog.students.uit.yorku.ca/wp-content/uploads/2014/07/8521874.gif';
        }
        tempArticle.content = articleNodeToAdd.querySelector(".r-content").value;
        tempArticle.author = articleNodeToAdd.querySelector('.r-author').value;
        tempArticle.createdAt = new Date(articleNodeToAdd.querySelector('.r-data').value);
        if (articleModel.addArticle(tempArticle) == true) {
            workerWithHtml.addArticle(tempArticle);
            localStorage.setItem('articles', JSON.stringify(articleModel.articles));
            console.log(articleModel.articles);
            console.log(localStorage.getItem('articles'));
            document.getElementById('pagination-show-more').style.display = 'inline';
            document.querySelector('#article-list').style.display = 'block';
            document.querySelector('.filter').style.display = 'block';
            document.querySelector('.block-filter').style.display = 'block';
            document.getElementById('redacte-form2').style.display = 'none';
            tempId = '';
            var array = articleModel.getArticles();
            workerWithHtml.showArticles(array);
        }
        else {
            document.getElementById('redacte-form2').style.display = 'none';
            document.querySelector('.work_with-error').style.display = 'block';
        }
        allFunctions();
    }
}

function showButtonUser() {
    var articleList = document.getElementById('article-list');
    var articleListNode = document.querySelectorAll('.more');
    for (var i = 0; i < articleListNode.length; i++) {
        articleListNode[i].addEventListener('click', handleShowBtnClick);
    }

    function handleShowBtnClick(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        else {
            var articleNodeToShow = event.target.parentElement;
            tempId = articleNodeToShow.dataset.id;

            document.getElementById('article-list').style.display = 'none';
            document.getElementById('template-news').style.display = 'block';
            document.getElementById('page-news').style.display = 'block';
            document.querySelector('.content2').style.display = 'none';
            document.querySelector('.filter').style.display = 'none';
            document.querySelector('.block-filter').style.display = 'none';

            document.getElementById('pagination-show-more').style.display = 'none';
            document.querySelector('.pagination-bar').style.display = 'none';
            var ARTICLE_TEMPLATE = document.getElementById('template-news');
            ARTICLE_TEMPLATE.querySelector('.page-name').textContent = articleNodeToShow.querySelector('.name').textContent;
            ARTICLE_TEMPLATE.querySelector('.summary').textContent = articleNodeToShow.querySelector('.text-news').textContent;
            ARTICLE_TEMPLATE.querySelector('.all-text-news').textContent = articleNodeToShow.querySelector('.all').textContent;
            ARTICLE_TEMPLATE.querySelector('.imgNews').src = articleNodeToShow.querySelector('.img-news').src;
            ARTICLE_TEMPLATE.querySelector('.text-author2').textContent = articleNodeToShow.querySelector('.text-author').textContent;
            ARTICLE_TEMPLATE.querySelector('.text-date2').textContent = articleNodeToShow.querySelector('.text-date').textContent;
            // document.querySelector('.footer').style.marginTop = '0px';
            if (document.querySelector('.your-name').textContent == '') {
                var tempdelete = document.querySelector('.delete2');
                tempdelete.style.display = 'none';
                var tempredacte = document.querySelector('.redacte2');
                tempredacte.style.display = 'none';
            }
            else {
                var tempdelete2 = document.querySelector('.delete2');
                tempdelete2.style.display = 'inline';
                var tempredacte2 = document.querySelector('.redacte2');
                tempredacte2.style.display = 'inline';

            }
            //allFunctions();
        }
    }
}

function deleteButtonOnNews() {
    var articleListNode = document.querySelector('.delete2');
    articleListNode.addEventListener('click', handleDeleteBtnClick);

    function handleDeleteBtnClick(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        // document.getElementById('pagination-show-more').style.display='inline';
        document.getElementById('article-list').style.display = 'block';
        document.getElementById('template-news').style.display = 'none';
        document.querySelector('.filter').style.display = 'block';
        document.querySelector('.block-filter').style.display = 'block';

        articleModel.removeArticle(tempId);
        workerWithHtml.removeArticle(tempId);
        localStorage.setItem('articles', JSON.stringify(articleModel.articles));
        document.getElementById('pagination-show-more').style.display = 'inline';

        var array = articleModel.getArticles();
        workerWithHtml.showArticles(array);
        tempId = '';
        allFunctions();

    }
}

function redacteButtonOnNews() {

    var articleListNode = document.querySelector('.redacte2');
    articleListNode.addEventListener('click', handleRedacteBtnClick);


    function handleRedacteBtnClick(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        console.log(tempId);
        var articleNodeToRedacte = document.getElementById('page-news');

        //document.getElementById('pagination-show-more').style.display='none';
        document.getElementById('redacte-form').style.display = 'block';
        var temp = document.getElementById('redacte-form');
        temp.querySelector('.r-title').value = articleNodeToRedacte.querySelector('.page-name').textContent;
        temp.querySelector('.r-summary').value = articleNodeToRedacte.querySelector('.summary').textContent;
        temp.querySelector('.r-img').value = articleNodeToRedacte.querySelector('.imgNews').src;
        temp.querySelector('.r-content').value = articleNodeToRedacte.querySelector('.all-text-news').textContent;
        temp.querySelector('.r-data').value = articleNodeToRedacte.querySelector('.text-date2').textContent;
        temp.querySelector('.r-author').value = articleNodeToRedacte.querySelector('.text-author2').textContent;
        document.getElementById('page-news').style.display = 'none';
        allFunctions();


    }
}

function exitButton() {
    var button = document.querySelector('#button-exit');
    button.addEventListener('click', handleClick);

    function handleClick(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        document.querySelector('#hello-world').style.display = 'inline';
        document.querySelector('#article-list').style.display = 'none';
        document.getElementById('redacte-form').style.display = 'none';
        document.getElementById('redacte-form2').style.display = 'none';
        document.getElementById('template-news').style.display = 'none';
        document.querySelector('.filter').style.display = 'none';
        document.querySelector('.block-filter').style.display = 'none';
        document.getElementById('pagination-show-more').style.display = 'none';
        document.querySelector('.content3').style.display = 'block';
        document.querySelector('#button-exit').style.display = 'none';
        document.querySelector('.content3').style.marginTop = '140px';
        document.querySelector('.footer').style.marginTop = '95px';
        document.querySelector('.your-name').textContent = '';
        document.querySelector('.text-login').value = '';
        document.querySelector('.text-pass').value = '';
        //document.querySelector("#logo") = 'disabled'
        //allFunctions();
    }


}

function enterButton() {
    var button = document.querySelector('.enter-button');
    button.addEventListener('click', handleClick);
    function handleClick(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        else {
            if (document.querySelector('.text-login').value != '') {
                articleModel.setUserName(document.querySelector('.text-login').value);
                console.log(document.querySelector('.text-login').value);
                var article = event.target.parentElement;
                document.querySelector('#article-list').style.display = 'block';
                document.querySelector('.filter').style.display = 'block';
                document.querySelector('.block-filter').style.display = 'block';
                document.getElementById('pagination-show-more').style.display = 'inline';
                document.querySelector('#button-exit').style.display = 'inline';
                document.querySelector('#hello-world').style.display = 'none';

                document.querySelector('.your-name').textContent = article.querySelector('.text-login').value;
                document.querySelector('.content3').style.display = 'none';
                document.querySelector('#button-exit').textContent = 'Выйти';
                document.querySelector('.add-news').style.display = 'inline';
                var tempdelete = document.querySelectorAll('.delete');
                var tempredacte = document.querySelectorAll('.redacte');
                for (var i = 0; i < tempdelete.length; i++) {
                    tempdelete[i].style.display = 'inline';
                }
                for (var i = 0; i < tempredacte.length; i++) {
                    tempredacte[i].style.display = 'inline';
                }
                var array = articleModel.getArticles();
                workerWithHtml.showArticles(array);
                // allFunctions();
            }
            else {
                document.getElementById('article-list').style.display = 'block';
                document.querySelector('.filter').style.display = 'block';
                document.querySelector('.block-filter').style.display = 'block';

                document.getElementById('pagination-show-more').style.display = 'inline';
                var array = articleModel.getArticles();
                workerWithHtml.showArticles(array);
                document.querySelector('.your-name').textContent = '';
                document.querySelector('#button-exit').style.display = 'inline';
                document.querySelector('#button-exit').textContent = 'Войти';
                document.querySelector('.add-news').style.display = 'none';
                var tempdelete2 = document.querySelectorAll('.delete');
                var tempredacte2 = document.querySelectorAll('.redacte');
                for (var i = 0; i < tempdelete2.length; i++) {
                    tempdelete2[i].style.display = 'none';
                }
                for (var i = 0; i < tempredacte2.length; i++) {
                    tempredacte2[i].style.display = 'none';
                }
                document.querySelector('.content2').style.display = 'none';
                document.querySelector('#hello-world').style.display = 'none';
                document.querySelector('.content3').style.display = 'none';
                //allFunctions();
            }
        }
        allFunctions();
    }

}

function filterName() {
    var articleList = document.getElementById('article-list');
    var articleListNode = document.querySelector('.button-apply');
    articleListNode.addEventListener('click', handleDeleteBtnClick);

    function handleDeleteBtnClick(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }

        var temp = {};
        temp.author = document.querySelector('.text').value;
        temp.createdAt = new Date(document.querySelector('.text2').value);
        if (temp.author !== '' && document.querySelector('.text2').value !== '') {
            var array = articleModel.getArticles2(undefined, undefined, temp);
        }
        else {
            if (temp.author !== '') {
                temp.createdAt = undefined;
                var array = articleModel.getArticles2(undefined, undefined, temp);
            }
            else {
                if (document.querySelector('.text2').value !== '') {
                    temp.author = undefined;
                    var array = articleModel.getArticles2(undefined, undefined, temp);
                }
                else {
                    temp.author = undefined;
                    temp.createdAt = undefined;
                    var array = articleModel.getArticles2(undefined, undefined, temp);
                }
            }
        }
        workerWithHtml.showArticles(array);
        document.getElementById('pagination-show-more').style.display = 'none';
        allFunctions();
    }
}

var pagination = (function () {
    var TOTAL; // всего статей
    var PER_PAGE = 5; // статей на 1-ой странице
    var CURRENT_PAGE = 1; // текущая страница
    var SHOW_MORE_BUTTON;
    var SHOW_MORE_CALLBACK; // функция, которую вызывать, когда произошел клик по кнопке


    function init(showMoreCb) {
        // TOTAL = total;
        SHOW_MORE_CALLBACK = showMoreCb;
        SHOW_MORE_BUTTON = document.getElementById('pagination-show-more');
        SHOW_MORE_BUTTON.addEventListener('click', handleShowMoreClick)

        /* Не показывать кнопку если статей нет */
        if (getTotalPages() <= CURRENT_PAGE) {
            hideShowMoreButton();
        }

        /* Вернуть skip, top для начальной отрисовки статей */
        return getParams();
    }

    function handleShowMoreClick() {
        var paginationParams = nextPage();
        SHOW_MORE_CALLBACK(paginationParams.skip, paginationParams.top);
    }

    function getTotalPages() {
        TOTAL = articleModel.getArticlesCount();
        return Math.ceil(TOTAL / PER_PAGE);
    }

    function nextPage() {
        CURRENT_PAGE++;
        if (getTotalPages() <= CURRENT_PAGE) {
            hideShowMoreButton();
        }

        return getParams();
    }

    function getParams() {
        return {
            top: PER_PAGE * CURRENT_PAGE,
            skip: 0 //(CURRENT_PAGE - 1) * PER_PAGE
        };
    }

    function hideShowMoreButton() {
        SHOW_MORE_BUTTON.hidden = true;
        document.getElementById('pagination-show-more').style.display = 'none';
    }

    return {
        init: init
    }
    //allFunctions();
}());


function renderArticlesPag(skip, top) {
    var articles = articleModel.getArticles(skip, top);
    workerWithHtml.showArticles(articles);
    allFunctions();
}


