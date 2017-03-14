var userName = "Екатерина Соловьева";
var articleModel = function () {
    var articles = [
        {
            id: '1',
            img: 'http://telegraf.com.ua/files/2015/05/51049547.jpg',
            title: 'Том Хэнкс готовит к изданию сборник своих рассказов ',
            summary: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories)',
            createdAt: new Date('2016-12-29T23:00:00'),
            author: 'Алина Шеменова',
            content: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.',
        },
        {
            id: '2',
            img:'https://ptzgovorit.ru/sites/default/files/original_nodes/000000131.jpg',
            title: '5 советов при выборе мебели',
            summary: 'Выбираете мебель и не знаете с чего начать? Многообразие выбора только усложняет и без того нелёгкий процесс поиска? Давайте по порядку.',
            createdAt: new Date('2016-12-14T18:30:00'),
            author: 'Mr. Snow',
            content: 'Выбираете мебель и не знаете с чего начать? Многообразие выбора только усложняет и без того нелёгкий процесс поиска? Давайте по порядку.',
        },
        {
            id: '3',
            img: 'https://images3.cosmopolitan.ru/upload/img_cache/7fc/7fc36124c8d363cdd1d8d976e7697c04_cropped_740x460.jpg',
            title: 'Криштиану Роналду и Анджелина Джоли снимутся в турецком сериале',
            summary: 'Нападающий испанского футбольного клуба «Реал» Криштиану Роналду и американская актриса Анджелина Джоли снимутся в турецком сериале. Об этом сообщает издании Daily Saban.',
            createdAt: new Date('2016-01-01T20:30:00'),
            author: 'Константин Семенов',
            content: 'Нападающий испанского футбольного клуба «Реал» Криштиану Роналду и американская актриса Анджелина Джоли снимутся в турецком сериале. Об этом сообщает издании Daily Saban.',
        },
        {
            id: '4',
            img:'http://telegraf.com.ua/files/2015/05/51049547.jpg',
            title: 'Том Хэнкс готовит к изданию сборник своих рассказов ',
            summary: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories)',
            createdAt: new Date('2016-12-28T23:00:00'),
            author: 'Алина Шеменова',
            content: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.',
        },
        {
            id: '5',
            img:'https://ptzgovorit.ru/sites/default/files/original_nodes/000000131.jpg',
            title: '5 советов при выборе мебели',
            summary: 'Выбираете мебель и не знаете с чего начать? Многообразие выбора только усложняет и без того нелёгкий процесс поиска? Давайте по порядку.',
            createdAt: new Date('2016-12-29T18:30:00'),
            author: 'Алина Шеменова',
            content: 'Выбираете мебель и не знаете с чего начать? Многообразие выбора только усложняет и без того нелёгкий процесс поиска? Давайте по порядку.',
        },
        {
            id: '6',
            img: 'https://www.rbc.ua/static/img/j/o/jouli_650x410.jpg',
            title: 'Криштиану Роналду и Анджелина Джоли снимутся в турецком сериале',
            summary: 'Нападающий испанского футбольного клуба «Реал» Криштиану Роналду и американская актриса Анджелина Джоли снимутся в турецком сериале. Об этом сообщает издании Daily Saban.',
            createdAt: new Date('2017-01-02T14:30:00'),
            author: 'Константин Семенов',
            content: 'Нападающий испанского футбольного клуба «Реал» Криштиану Роналду и американская актриса Анджелина Джоли снимутся в турецком сериале. Об этом сообщает издании Daily Saban.',
        },
        {
            id: '7',
            img: 'http://telegraf.com.ua/files/2015/05/51049547.jpg',
            title: 'Том Хэнкс готовит к изданию сборник своих рассказов ',
            summary: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories)',
            createdAt: new Date('2017-02-01T23:00:00'),
            author: 'Алина Шеменова',
            content: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.',
        },
        {
            id: '8',
            img:'http://moskalev.org/uploads/posts/2017-01/1485799258_getstaticpath.jpg',
            title: '5 советов при выборе мебели',
            summary: 'Выбираете мебель и не знаете с чего начать? Многообразие выбора только усложняет и без того нелёгкий процесс поиска? Давайте по порядку.',
            createdAt: new Date('2016-12-23T18:30:00'),
            author: 'Mr. Snow',
            content: 'Выбираете мебель и не знаете с чего начать? Многообразие выбора только усложняет и без того нелёгкий процесс поиска? Давайте по порядку.',
        },
        {
            id: '9',
            img: 'https://www.rbc.ua/static/img/j/o/jouli_650x410.jpg',
            title: 'Криштиану Роналду и Анджелина Джоли снимутся в турецком сериале',
            summary: 'Нападающий испанского футбольного клуба «Реал» Криштиану Роналду и американская актриса Анджелина Джоли снимутся в турецком сериале. Об этом сообщает издании Daily Saban.',
            createdAt: new Date('2017-02-18T20:30:00'),
            author: 'Константин Семенов',
            content: 'Нападающий испанского футбольного клуба «Реал» Криштиану Роналду и американская актриса Анджелина Джоли снимутся в турецком сериале. Об этом сообщает издании Daily Saban.',
        },
        {
            id: '10',
            img: 'http://cdn.fishki.net/upload/post/201507/09/1591136/1_tom_hanks-e1425716608889.jpg',
            title: 'Том Хэнкс готовит к изданию сборник своих рассказов',
            summary: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories)',
            createdAt: new Date('2016-12-09T23:00:00'),
            author: 'Mr. Snow',
            content: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.',
        },
        {
            id: '11',
            img:'http://moskalev.org/uploads/posts/2017-01/1485799258_getstaticpath.jpg',
            title: '5 советов при выборе мебели',
            summary: 'Выбираете мебель и не знаете с чего начать? Многообразие выбора только усложняет и без того нелёгкий процесс поиска? Давайте по порядку.',
            createdAt: new Date('2016-01-19T18:30:00'),
            author: 'Алина Шеменова',
            content: 'Выбираете мебель и не знаете с чего начать? Многообразие выбора только усложняет и без того нелёгкий процесс поиска? Давайте по порядку.',
        },
        {
            id: '12',
            img: 'https://images3.cosmopolitan.ru/upload/img_cache/7fc/7fc36124c8d363cdd1d8d976e7697c04_cropped_740x460.jpg',
            title: 'Криштиану Роналду и Анджелина Джоли снимутся в турецком сериале ',
            summary: 'Нападающий испанского футбольного клуба «Реал» Криштиану Роналду и американская актриса Анджелина Джоли снимутся в турецком сериале. Об этом сообщает издании Daily Saban.',
            createdAt: new Date('2017-01-07T20:30:00'),
            author: 'Mr. Snow',
            content: 'Нападающий испанского футбольного клуба «Реал» Криштиану Роналду и американская актриса Анджелина Джоли снимутся в турецком сериале. Об этом сообщает издании Daily Saban.',
        },
        {
            id: '13',
            img: 'https://images3.cosmopolitan.ru/upload/img_cache/7fc/7fc36124c8d363cdd1d8d976e7697c04_cropped_740x460.jpg',
            title: 'Криштиану Роналду и Анджелина Джоли снимутся в турецком сериале',
            summary: 'Нападающий испанского футбольного клуба «Реал» Криштиану Роналду и американская актриса Анджелина Джоли снимутся в турецком сериале. Об этом сообщает издании Daily Saban.',
            createdAt: new Date('2017-03-01T20:00:00'),
            author: 'Константин Семенов',
            content: 'Нападающий испанского футбольного клуба «Реал» Криштиану Роналду и американская актриса Анджелина Джоли снимутся в турецком сериале. Об этом сообщает издании Daily Saban.',
        },
        {
            id: '14',
            img:'https://sputnik.by/images/101841/75/1018417589.jpg',
            title: 'Попытка №4. Минское "Динамо" спустя два года вновь сыграет в плей-офф КХЛ ',
            summary: 'Минское «Динамо» начинает сегодня четвертую в своей истории серию плей-офф Континентальной хоккейной лиги.',
            createdAt: new Date('2017-03-03T20:00:00'),
            author: 'Антон Базанов',
            content: 'Минское «Динамо» начинает сегодня четвертую в своей истории серию плей-офф Континентальной хоккейной лиги. NewsPortal рассказывает, чего ждать от противостояния с «Локомотивом», а также сравнивает нынешних «зубров» с предыдущими составами, выходившими в плей-офф.',
        },
        {
            id: '15',
            img:'https://ptzgovorit.ru/sites/default/files/original_nodes/000000131.jpg',
            title: '5 советов при выборе мебели',
            summary: 'Выбираете мебель и не знаете с чего начать? Многообразие выбора только усложняет и без того нелёгкий процесс поиска? Давайте по порядку.',
            createdAt: new Date('2016-10-10T18:30:00'),
            author: 'Валентина Сабольская',
            content: 'Выбираете мебель и не знаете с чего начать? Многообразие выбора только усложняет и без того нелёгкий процесс поиска? Давайте по порядку.',
        },
        {
            id: '16',
            img: 'http://telegraf.com.ua/files/2015/05/51049547.jpg',
            title: 'Том Хэнкс готовит к изданию сборник своих рассказов ',
            summary: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories)',
            createdAt: new Date('2016-01-28T23:30:00'),
            author: 'Екатерина Лаврова',
            content: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.',
        },
        {
            id: '17',
            img:'https://img.tyt.by/n/sport/10/0/12_khokkey_belarus_-_franciya_kors_tutby_20130204_0150.jpg',
            title: 'Команда Беларуси завоевала 16 медалей на Кубке мира по зимнему плавани',
            summary: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
            createdAt: new Date('2017-03-05T18:30:00'),
            author: 'Mr. Snow',
            content: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
        },
        {
            id: '18',
            img:'https://sputnik.by/images/101841/75/1018417589.jpg',
            title: 'Команда Беларуси завоевала 16 медалей на Кубке мира по зимнему плавани',
            summary: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
            createdAt: new Date('2015-12-29T20:30:00'),
            author: 'Валентина Сабольская',
            content: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
        },
        {
            id: '19',
            img: 'http://cdn.fishki.net/upload/post/201507/09/1591136/1_tom_hanks-e1425716608889.jpg',
            title: 'Том Хэнкс готовит к изданию сборник своих рассказов ',
            summary: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories)',
            createdAt: new Date('2016-02-01T02:17:00'),
            author: 'Алина Шеменова',
            content: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.',
        },
        {
            id: '20',
            img:'https://img.tyt.by/n/sport/10/0/12_khokkey_belarus_-_franciya_kors_tutby_20130204_0150.jpg',
            title: 'Команда Беларуси завоевала 15 медалей на Кубке мира по зимнему плавани',
            summary: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
            createdAt: new Date('2017-03-05T18:00:00'),
            author: 'Константин Семенов',
            content: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
        },
        {
            id: '21',
            img:'http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/7328.jpg',
            title: 'Котик',
            summary: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
            createdAt: new Date('2018-03-05T18:30:00'),
            author: 'Константин Семенов',
            content: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
        }

        ];

    var maxId = articles.length;

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;
        filterConfig = filterConfig || {};
        var _articles;
        if (filterConfig.author !== undefined) {
            _articles = articles.filter(function (article) {
                return article.author === filterConfig.author;
            })
        }
        else {
            _articles = articles;
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
                for (var i = 0; i < articles.length; i++) {
                    if (id.localeCompare(articles[i].id) == 0) {
                        return article = articles[i];
                    }
                }
            }
        }
    }

    function validateArticle(article) {
        article = article || {};
        return (('id' in article == true) && (typeof article.id === 'string') && ('title' in article == true) && (typeof article.title === 'string' ) && ( article.title.length < 100) && ('summary' in article == true) && (typeof article.summary === 'string' ) && ( article.summary.length < 200) && ('createdAt' in article == true) && ((article.createdAt instanceof Date) == true) && ('author' in article == true) && (typeof article.author === 'string') && ('content' in article == true) && (typeof article.content === 'string'));
    }

    function editArticle(id, article) {
        id = id || null;
        article = article || {};
        var index;
        for (var i = 0; i < articles.length; i++) {
            if (id == articles[i].id) {
                index = i;
                if (validateArticle(articles[i]) == true) {
                    if (article.title !== undefined) {
                        articles[i].title = article.title;
                    }
                    if (article.summary !== undefined) {
                        articles[i].summary = article.summary;
                    }
                    if (article.content !== undefined) {
                        articles[i].content = article.content;
                    }
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }

    function removeArticle(id) {
        id = id || null;
        for (var i = 0; i < articles.length; i++) {
            if (id == articles[i].id) {
                articles.splice(i, 1);
                return true;
            }
        }
        return false;
    }


    function addArticle(article) {
        article = article || {};
        article.id = (maxId + 1) + '';
        if (validateArticle(article) == true) {
            articles.splice(articles.length, 0, article);
            maxId++;
            // console.log(getArticle(maxId + ''))
            return true;
        }
        else {
            return false;
        }
    }

    return {
        getArticles: getArticles,
        getArticle: getArticle,
        validateArticle: validateArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        addArticle: addArticle
    }
}

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
        document.querySelector('.your-name').textContent = userName;
        template.querySelector('.block').dataset.id = article.id;
        template.querySelector('.name').textContent = article.title;
        template.querySelector('.img-news').src = article.img;
        template.querySelector('.text-news').textContent = article.summary;
        template.querySelector('.text-author').textContent = article.author;
        template.querySelector('.text-date').textContent = formatDate(article.createdAt);
        return template.querySelector('.block').cloneNode(true);

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
       var node =  document.querySelector('[data-id~="' + id +'"]');
       if(node){
           node.remove();
       }
    }

    function editArticle(id, article) {
        var node =  document.querySelector('[data-id~="' + id +'"]');
        if(node){
            node.innerHTML = renderArticle(article).innerHTML;
        }

    }

    return {
        showArticles: showArticles,
        addArticle: addArticle,
        removeArticle: removeArticle,
        editArticle: editArticle,
        init: init
    }
}

document.addEventListener('DOMContentLoaded', startApp);


function startApp() {
    workerWithHtml.init();
    var array = workerWithArticles.getArticles();
    console.log(array.length);
    workerWithHtml.showArticles(array);
}

var workerWithArticles = articleModel();
var workerWithHtml = htmlControler();


function showArticles(skip, top, filter) {
    var array = workerWithArticles.getArticles(skip, top, filter);
    workerWithHtml.showArticles(array);
}

function addArticle(article) {
    var temp = workerWithArticles.addArticle(article);
    workerWithHtml.addArticle(article);
    var array = workerWithArticles.getArticles();
    workerWithHtml.showArticles(array);
}

function removeArticle(id) {
        var temp= workerWithArticles.removeArticle(id);
        workerWithHtml.removeArticle(id);
        return temp;
}

function editArticle(id, article) {
    var temp = workerWithArticles.editArticle(id, article);
    var newArticle = workerWithArticles.getArticle(id);
    console.log(newArticle);
    workerWithHtml.editArticle(id, newArticle);
    return temp;

}


