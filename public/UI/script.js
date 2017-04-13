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
    template.querySelector('.text-date').textContent = formatDate(article.createdAt);
    return template.querySelector('.block').cloneNode(true);
  }

  function renderArticle2(article) {
    var template = ARTICLE_TEMPLATE;
    template.querySelector('.name').textContent = article.title;
    template.querySelector('.img-news').src = article.img;
    template.querySelector('.text-news').textContent = article.summary;
    template.querySelector('.all').textContent = article.content;
    return template.querySelector('.block').cloneNode(true);
  }

  function workerWithUser(userName) {
    if (userName) {
      document.querySelector('.your-name').textContent = userName;
      document.querySelector('#button-exit').style.display = 'inline';
      document.querySelector('#button-exit').textContent = 'Выйти';
      document.querySelector('.filter').style.display = 'block';
      document.querySelector('.add-news').style.display = 'inline';
      var deleteArticle = document.querySelectorAll('.delete');
      deleteArticle.forEach(item => item.style.display = 'inline');
      var redacteArticle = document.querySelectorAll('.redacte');
      redacteArticle.forEach(item => item.style.display = 'inline');
    } else {
      document.querySelector('.your-name').textContent = '';
      document.querySelector('#button-exit').style.display = 'inline';
      document.querySelector('#button-exit').textContent = 'Войти';
      document.querySelector('.add-news').style.display = 'none';
      document.querySelector('.filter').style.display = 'block';
      var tempdelete = document.querySelectorAll('.delete');
      tempdelete.forEach(item => item.style.display = 'none');
      var tempredacte = document.querySelectorAll('.redacte');
      tempredacte.forEach(item => item.style.display = 'none');
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
    formatDate: formatDate
  }
}
var workerWithHtml = htmlControler();

var tempId = '';

document.addEventListener('DOMContentLoaded', startApp);

function startApp() {
  workerWithHtml.init();
  renderArticles();
  userPage();
  allFunctions();

  var paginationParams = pagination.init(renderArticlesPag);
  renderArticlesPag(paginationParams.skip, paginationParams.top);
}

function allFunctions() {
  var articleListNodeToDelete = document.querySelectorAll('.delete');
  articleListNodeToDelete.forEach(article => article.addEventListener('click', deleteButtonUser));

  var articleListNodeToShow = document.querySelectorAll('.more');
  articleListNodeToShow.forEach(article => article.addEventListener('click', showButtonUser));

  var articleToDeleteOnPage = document.querySelector('.delete2');
  articleToDeleteOnPage.addEventListener('click', deleteButtonOnNews);

  var articleListNodeToRedacte = document.querySelectorAll('.redacte');
  articleListNodeToRedacte.forEach(article => article.addEventListener('click', redacteButtonUser));

  var buttonLogo = document.querySelector("#logo");
  buttonLogo.addEventListener('click', callNewsPortal);

  var articleListNodeToAdd = document.querySelector('.add-news');
  articleListNodeToAdd.addEventListener('click', addButtonUser);

  var articleListNode = document.querySelector('.redacte2');
  articleListNode.addEventListener('click', redacteButtonOnNews);

  var articleApplyRedacte = document.querySelector('.apply');
  articleApplyRedacte.addEventListener('click', apllyRedacteButtonUser);

  var articleNode = document.querySelector('.apply2');
  articleNode.addEventListener('click', apllyAddButtonUser);

  var checkbox = document.querySelector('.button-error');
  checkbox.addEventListener('click', buttonError);

  var button = document.querySelector('#button-exit');
  button.addEventListener('click', exitButton);

  var enter = document.querySelector('.enter-button');
  enter.addEventListener('click', enterButton);

  var articleFilter = document.querySelector('.button-apply');
  articleFilter.addEventListener('click', filterName);
}

function renderArticles() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
    var articles = JSON.parse(this.responseText);
    articles.forEach(article => article.createdAt = new Date(article.createdAt));
    workerWithHtml.showArticles(articles);
    allFunctions();
  });
  oReq.open('GET', '/article');
  oReq.send();
}
function userPage() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
    var name = JSON.parse(this.responseText);
    workerWithHtml.workerWithUser(name);
    allFunctions();
  });
  oReq.open('GET', '/user');
  oReq.send();
}

function deleteButtonUser(event) {
  var articleList = document.getElementById('article-list');
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  var articleNodeToDelete = event.target.parentElement;
  console.log(articleNodeToDelete.dataset.id);


  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
    renderArticles();
  });
  oReq.open('DELETE', '/article');
  oReq.setRequestHeader('content-type', 'application/json');
  var body = JSON.stringify({
    id: articleNodeToDelete.dataset.id,
  });
  oReq.send(body);

  document.querySelector('.pagination-bar').style.display = 'inline';
  articleList.removeChild(articleNodeToDelete);
}

function showButtonUser(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  var articleNodeToShow = event.target.parentElement;
  tempId = articleNodeToShow.dataset.id;

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
    var articleToShow = JSON.parse(this.responseText);
    articleToShow.createdAt = workerWithHtml.formatDate(new Date(articleToShow.createdAt));

    document.getElementById('article-list').style.display = 'none';
    document.getElementById('template-news').style.display = 'block';
    document.getElementById('page-news').style.display = 'block';
    document.querySelector('.content2').style.display = 'none';
    document.querySelector('.filter').style.display = 'none';
    document.querySelector('.pagination-bar').style.display = 'none';

    var ARTICLE_TEMPLATE = document.getElementById('template-news');
    ARTICLE_TEMPLATE.querySelector('.page-name').textContent = articleToShow.title;
    ARTICLE_TEMPLATE.querySelector('.summary').textContent = articleToShow.summary;
    ARTICLE_TEMPLATE.querySelector('.all-text-news').textContent = articleToShow.content;
    ARTICLE_TEMPLATE.querySelector('.imgNews').src = articleToShow.img;
    ARTICLE_TEMPLATE.querySelector('.text-author2').textContent = articleToShow.author;
    ARTICLE_TEMPLATE.querySelector('.text-date2').textContent = articleToShow.createdAt;
    if (document.querySelector('.your-name').textContent) {
      var deleteButton = document.querySelector('.delete2');
      deleteButton.style.display = 'inline';
      var redacteButton = document.querySelector('.redacte2');
      redacteButton.style.display = 'inline';
      allFunctions();
    } else {
      var tempdelete = document.querySelector('.delete2');
      tempdelete.style.display = 'none';
      var tempredacte = document.querySelector('.redacte2');
      tempredacte.style.display = 'none';
      allFunctions();
    }
  });
  oReq.open('GET', '/article/' + tempId);
  console.log('воот' + tempId);
  oReq.send();
}

function deleteButtonOnNews(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
    renderArticles();
  });
  oReq.open('DELETE', '/article');
  oReq.setRequestHeader('content-type', 'application/json');
  var body = JSON.stringify({
    id: tempId,
  });
  oReq.send(body);

  document.getElementById('article-list').style.display = 'block';
  document.getElementById('template-news').style.display = 'none';
  document.querySelector('.filter').style.display = 'block';
  document.querySelector('.pagination-bar').style.display = 'inline';

  workerWithHtml.removeArticle(tempId);
  tempId = '';
}

function redacteButtonUser(event) {
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

  document.querySelector('.pagination-bar').style.display = 'none';
  document.querySelector('.filter').style.display = 'none';
  document.querySelector('.work_with-error').style.display = 'none';
  allFunctions();
}

function callNewsPortal(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  if (document.querySelector('.your-name').textContent) {
    userPage();
    console.log(document.querySelector('.your-name').textContent);
    document.getElementById('article-list').style.display = 'block';
    document.getElementById('redacte-form').style.display = 'none';
    document.getElementById('redacte-form2').style.display = 'none';
    document.getElementById('template-news').style.display = 'none';
    document.querySelector('.work_with-error').style.display = 'none';
    document.querySelector('.pagination-bar').style.display = 'inline';
    document.querySelector('.filter').style.display = 'block';
  } else {
    userPage();
    document.getElementById('article-list').style.display = 'block';
    document.getElementById('redacte-form').style.display = 'none';
    document.getElementById('redacte-form2').style.display = 'none';
    document.getElementById('template-news').style.display = 'none';
    document.querySelector('.filter').style.display = 'block';
    document.querySelector('.pagination-bar').style.display = 'inline';
    document.querySelector('.content2').style.display = 'none';
    document.querySelector('#hello-world').style.display = 'none';
    document.querySelector('.content3').style.display = 'none';

    var tempdelete = document.querySelectorAll('.delete');
    tempdelete.forEach(temp => temp.style.display = 'none');

    var tempredacte = document.querySelectorAll('.redacte');
    tempredacte.forEach(temp => temp.style.display = 'none');
  }
}

function addButtonUser(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  document.querySelector('#article-list').style.display = 'none';
  document.getElementById('redacte-form2').style.display = 'block';
  var temp = document.getElementById('redacte-form2');
  document.getElementById('redacte-form2').style.marginTop = '100px';
  document.body.style.height = '570px';
  document.querySelector('.pagination-bar').style.display = 'none';
  document.querySelector('.filter').style.display = 'none';

  temp.querySelector('.r-title').value = ' ';
  temp.querySelector('.r-summary').value = '';
  temp.querySelector('.r-img').value = '';
  temp.querySelector('.r-content').value = '';
  temp.querySelector('.r-data').value = new Date();
  temp.querySelector('.r-author').value = document.querySelector('.your-name').textContent;

  allFunctions();
}

function redacteButtonOnNews(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  console.log(tempId);

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
    var articleNodeToRedacte = JSON.parse(this.responseText);
    document.getElementById('redacte-form').style.display = 'block';
    var temp = document.getElementById('redacte-form');
    temp.querySelector('.r-title').value = articleNodeToRedacte.title;
    temp.querySelector('.r-summary').value = articleNodeToRedacte.summary;
    temp.querySelector('.r-img').value = articleNodeToRedacte.img;
    temp.querySelector('.r-content').value = articleNodeToRedacte.content;
    temp.querySelector('.r-data').value = articleNodeToRedacte.createdAt;
    temp.querySelector('.r-author').value = articleNodeToRedacte.author;
    document.getElementById('page-news').style.display = 'none';
    document.getElementById('template-news').style.display = 'none';
    document.getElementById('redacte-form').style.marginTop = '100px';
    document.body.style.height = '570px';
    allFunctions();
  });
  oReq.open('GET', '/article/' + tempId);
  console.log('воот' + tempId);
  oReq.send();
}

function apllyRedacteButtonUser(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
    var temp = JSON.parse(this.responseText);
    if (temp) {
      document.querySelector('#article-list').style.display = 'block';
      document.querySelector('.filter').style.display = 'block';
      document.getElementById('redacte-form').style.display = 'none';
      document.querySelector('.pagination-bar').style.display = 'inline';
      tempId = '';
      renderArticles();
    } else {
      document.getElementById('redacte-form').style.display = 'none';
      document.querySelector('.work_with-error').style.display = 'block';
    }
    allFunctions();
  });

  oReq.open('PUT', '/article/' + tempId);
  oReq.setRequestHeader('content-type', 'application/json');
  var body = JSON.stringify({
    title: document.querySelector('.r-title').value,
    img: document.querySelector('.r-img').value,
    summary: document.querySelector('.r-summary').value,
    content: document.querySelector('.r-content').value,
  });
  oReq.send(body);
}

function apllyAddButtonUser(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  var articleNodeToAdd = event.target.parentElement;
  if (articleNodeToAdd.querySelector('.r-img').value === '') {
    articleNodeToAdd.querySelector('.r-img').value = ' http://yublog.students.uit.yorku.ca/wp-content/uploads/2014/07/8521874.gif';
  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
    var temp = JSON.parse(this.responseText);
    if (temp) {
      temp.createdAt = new Date(temp.createdAt);
      workerWithHtml.addArticle(temp);
      document.getElementById('pagination-show-more').style.display = 'inline';
      document.querySelector('#article-list').style.display = 'block';
      document.querySelector('.filter').style.display = 'block';
      document.getElementById('redacte-form2').style.display = 'none';
      document.querySelector('.pagination-bar').style.display = 'inline';
      tempId = '';
      renderArticles();
      allFunctions();
    } else {
      document.getElementById('redacte-form2').style.display = 'none';
      document.querySelector('.work_with-error').style.display = 'block';
      allFunctions();
    }
  });

  oReq.open('POST', '/article');
  oReq.setRequestHeader('content-type', 'application/json');
  var body = JSON.stringify({
    title: articleNodeToAdd.querySelector('.r-title').value,
    img: articleNodeToAdd.querySelector('.r-img').value,
    summary: articleNodeToAdd.querySelector('.r-summary').value,
    content: articleNodeToAdd.querySelector('.r-content').value,
  });
  oReq.send(body);
}

function buttonError(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  if (document.querySelector('.your-name').textContent) {
    userPage();
    console.log(document.querySelector('.your-name').textContent);
    document.getElementById('article-list').style.display = 'block';
    document.getElementById('redacte-form').style.display = 'none';
    document.getElementById('redacte-form2').style.display = 'none';
    document.getElementById('template-news').style.display = 'none';
    document.querySelector('.work_with-error').style.display = 'none';
    document.querySelector('.pagination-bar').style.display = 'inline';
    document.querySelector('.filter').style.display = 'block';
  } else {
    userPage();
    document.getElementById('article-list').style.display = 'block';
    document.getElementById('redacte-form').style.display = 'none';
    document.getElementById('redacte-form2').style.display = 'none';
    document.getElementById('template-news').style.display = 'none';
    document.querySelector('.filter').style.display = 'block';
    document.querySelector('.pagination-bar').style.display = 'inline';
    document.querySelector('.content2').style.display = 'none';
    document.querySelector('#hello-world').style.display = 'none';
    document.querySelector('.content3').style.display = 'none';

    var tempdelete2 = document.querySelectorAll('.delete2');
    tempdelete2.forEach(temp => temp.style.display = 'none');

    var tempredacte2 = document.querySelectorAll('.redacte');
    tempredacte2.forEach(temp => temp.style.display = 'none');
  }
}

function exitButton(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  document.querySelector('.your-name').textContent = '';
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
    document.querySelector('#hello-world').style.display = 'inline';
    document.querySelector('#article-list').style.display = 'none';
    document.getElementById('redacte-form').style.display = 'none';
    document.getElementById('redacte-form2').style.display = 'none';
    document.getElementById('template-news').style.display = 'none';
    document.querySelector('.filter').style.display = 'none';
    document.querySelector('.pagination-bar').style.display = 'none';
    document.querySelector('.content3').style.display = 'block';
    document.querySelector('#button-exit').style.display = 'none';
    document.querySelector('.content3').style.marginTop = '140px';
    document.querySelector('.footer').style.marginTop = '95px';
    document.querySelector('.text-login').value = '';
    document.querySelector('.text-pass').value = '';
    allFunctions();
  });
  oReq.open('PUT', '/userName');
  oReq.setRequestHeader('content-type', 'application/json');
  var body = JSON.stringify({
      user: document.querySelector('.your-name').textContent,
    })
  ;
  oReq.send(body);
}

function enterButton(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  var article = event.target.parentElement;
  document.querySelector('.your-name').textContent = article.querySelector('.text-login').value;

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
    var userName = JSON.parse(this.responseText);
    if (userName) {
      userPage();
      console.log(document.querySelector('.text-login').value);
      document.querySelector('#article-list').style.display = 'block';
      document.querySelector('.filter').style.display = 'block';
      document.querySelector('.pagination-bar').style.display = 'inline';
      document.querySelector('#button-exit').style.display = 'inline';
      document.querySelector('#hello-world').style.display = 'none';
      document.querySelector('.content3').style.display = 'none';
      document.querySelector('.add-news').style.display = 'inline';
    } else {
      userPage();
      document.getElementById('article-list').style.display = 'block';
      document.querySelector('.filter').style.display = 'block';
      document.querySelector('.pagination-bar').style.display = 'inline';
      document.querySelector('.your-name').textContent = '';
      document.querySelector('#button-exit').style.display = 'inline';
      document.querySelector('#button-exit').textContent = 'Войти';
      document.querySelector('.add-news').style.display = 'none';

      document.querySelector('.content2').style.display = 'none';
      document.querySelector('#hello-world').style.display = 'none';
      document.querySelector('.content3').style.display = 'none';
    }
  });
  oReq.open('PUT', '/userName');
  oReq.setRequestHeader('content-type', 'application/json');
  var body = JSON.stringify({
      user: document.querySelector('.your-name').textContent,
    })
  ;
  oReq.send(body);
}

function filterName(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  var temp = {};
  temp.author = document.querySelector('.text').value;
  temp.createdAt = new Date(document.querySelector('.text2').value);
  if (temp.author === '') {
    temp.author = undefined;
  }
  if (document.querySelector('.text2').value === '') {
    temp.createdAt = undefined;
  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
    var articles = JSON.parse(this.responseText);
    articles.forEach(article => article.createdAt = new Date(article.createdAt));
    workerWithHtml.showArticles(articles);
    // if (articles.length < 5) {
    //   document.querySelector('.pagination-bar').style.display = 'none';
    // }
    allFunctions();
  });
  oReq.open('GET', '/articleFilter/' + temp.author + '/' + temp.createdAt);
  oReq.send();
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
    //TOTAL = articleModel.getArticlesCount();
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function () {
      TOTAL = JSON.parse(this.responseText);
      return Math.ceil(TOTAL / PER_PAGE);
    });
    oReq.open('GET', '/articleCount');
    oReq.send();
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
      skip: 0,
    };
  }

  function hideShowMoreButton() {
    SHOW_MORE_BUTTON.hidden = true;
    document.getElementById('pagination-show-more').style.display = 'none';
  }

  return {
    init: init,
  };
}());

function renderArticlesPag(skip, top) {
  var articles = [];
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
    articles = JSON.parse(this.responseText);
    articles.forEach(article => article.createdAt = new Date(article.createdAt));
    workerWithHtml.showArticles(articles);
    allFunctions();
  });
  oReq.open('GET', '/articleWithParams');
  oReq.setRequestHeader('content-type', 'application/json');
  var body = JSON.stringify({
    skip: skip,
    top: top,
  });
  oReq.send(body);
}
