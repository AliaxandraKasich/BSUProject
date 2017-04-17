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
    img: 'http://mebelsekret.ru/wp-content/uploads/2014/10/softform-vels-%D0%9A%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C.png',
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
    img: 'http://telegraf.com.ua/files/2015/05/51049547.jpg',
    title: 'Том Хэнкс готовит к изданию сборник своих рассказов ',
    summary: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories)',
    createdAt: new Date('2016-12-28T23:00:00'),
    author: 'Алина Шеменова',
    content: 'Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.Американский актер Том Хэнкс в октябре выпустит сборник своих рассказов под названием «Истории о незаурядных пишущих машинках» (Uncommon Type: Some Stories). Как сообщил сам автор, он работал над книгой в течение двух лет.',
  },
  {
    id: '5',
    img: 'https://ptzgovorit.ru/sites/default/files/original_nodes/000000131.jpg',
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
    img: 'https://dom35.by/upload/iblock/294/294f69ff55b289eb85e7e4146267718d.jpg',
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
    img: 'https://www.triya.ru/upload/iblock/264/29af48be_6e85_11e2_a058_00269e0aabeb_29af48be_6e85_11e2_a058_00269e0aabeb.png',
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
    img: 'https://sputnik.by/images/101841/75/1018417589.jpg',
    title: 'Попытка №4. Минское "Динамо" спустя два года вновь сыграет в плей-офф КХЛ ',
    summary: 'Минское «Динамо» начинает сегодня четвертую в своей истории серию плей-офф Континентальной хоккейной лиги.',
    createdAt: new Date('2017-03-03T20:00:00'),
    author: 'Антон Базанов',
    content: 'Минское «Динамо» начинает сегодня четвертую в своей истории серию плей-офф Континентальной хоккейной лиги. NewsPortal рассказывает, чего ждать от противостояния с «Локомотивом», а также сравнивает нынешних «зубров» с предыдущими составами, выходившими в плей-офф.',
  },
  {
    id: '15',
    img: 'http://699.by/wp-content/uploads/2017/02/181506c2hten22bbvegq7m.jpg',
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
    img: 'https://img.tyt.by/n/sport/10/0/12_khokkey_belarus_-_franciya_kors_tutby_20130204_0150.jpg',
    title: 'Команда Беларуси завоевала 16 медалей на Кубке мира по зимнему плавани',
    summary: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
    createdAt: new Date('2017-03-05T18:30:00'),
    author: 'Mr. Snow',
    content: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
  },
  {
    id: '18',
    img: 'https://sputnik.by/images/101841/75/1018417589.jpg',
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
    img: 'https://img.tyt.by/n/sport/10/0/12_khokkey_belarus_-_franciya_kors_tutby_20130204_0150.jpg',
    title: 'Команда Беларуси завоевала 15 медалей на Кубке мира по зимнему плавани',
    summary: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
    createdAt: new Date('2017-03-05T18:00:00'),
    author: 'Константин Семенов',
    content: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
  },
  {
    id: '21',
    img: 'http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/7328.jpg',
    title: 'Котик',
    summary: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
    createdAt: new Date('2018-03-05T18:30:00'),
    author: 'Mr. Snow',
    content: 'Сборная Беларуси завоевала 16 медалей на Кубке мира по зимнему плаванию в столице Эстонии Таллине. Турнир прошел 4−5 марта 2017 г.',
  },
];
var articleModel = require('./articleModel');

module.exports.articles = articles;

var userName = 'Aliaxandra';
module.exports.userName = userName;

var maxId = articles.length;

module.exports.getArticles = function (skip, top, filterConfig) {
  skip = skip || 0;
  top = top || 5;
  filterConfig = filterConfig || {};
  var _articles;
  _articles = articles;

  if (filterConfig.author!==undefined && filterConfig.author !== 'undefined') {
    console.log(filterConfig.author);
    _articles = _articles.filter(function (article) {
      return article.author === filterConfig.author;
    })
    console.log('зашли в 1 модуль');
  }
  console.log(filterConfig);

  if (filterConfig.createdAt!==undefined && filterConfig.createdAt !== 'undefined') {
    console.log(filterConfig.createdAt + 'str 217');
    console.log('зашли в 2 модуль');
    filterConfig.createdAt = new Date(filterConfig.createdAt);
    _articles = _articles.filter(function (article) {
      var date = article.createdAt;
      date.setHours(3, 0, 0, 0);
      return filterConfig.createdAt.getTime() === date.getTime();
    });
  }
  _articles.sort(function (a, b) {
    return b.createdAt - a.createdAt;
  })
  console.log(' skip = ' + skip);
  console.log(' top = ' + top);
  return _articles.slice(skip, top + skip);
}

module.exports.getArticles2 = function (skip, top, filterConfig) {
  skip = skip || 0;
  top = top || articles.length;
  filterConfig = filterConfig || {};
  var _articles;
  if (filterConfig.author !== undefined && filterConfig.createdAt !== undefined) {
    _articles = articles.filter(function (article) {
      return article.author === filterConfig.author;
    })
    _articles = _articles.filter(function (article) {
      var date = article.createdAt;
      date.setHours(3, 0, 0, 0);
      return filterConfig.createdAt.getTime() === date.getTime();
    });
  } else {
    if (filterConfig.author !== undefined) {
      _articles = articles.filter(function (article) {
        return article.author === filterConfig.author;
      });
    } else {
      if (filterConfig.createdAt !== undefined) {
        _articles = articles.filter(function (article) {
          var date = article.createdAt;
          date.setHours(3, 0, 0, 0);
          return filterConfig.createdAt.getTime() === date.getTime();
        });
      } else {
        _articles = articles;
      }
    }
  }
  _articles.sort(function (a, b) {
    return b.createdAt - a.createdAt;
  })
  return _articles.slice(skip, top + skip);
}

module.exports.getArticle = function (id) {
  id = id || null;
  var article = {};
  if (typeof id === 'string') {
    if (id) {
      for (var i = 0; i < articles.length; i++) {
        if (id.localeCompare(articles[i].id) === 0) {
          console.log(articles[i].id);
          return article = articles[i];
        }
      }
    }
  }
}

module.exports.setUserName = function (name) {
  userName = name;
}

module.exports.getUserName = function () {
  return userName;
}

module.exports.validateArticle = function (article) {
  article = article || {};
  return (('id' in article) && (typeof article.id === 'string') && (article.id !== '') && (article.summary !== '') && (article.title !== '') && (article.content !== '') && ('title' in article) && (typeof article.title === 'string') && (article.title.length < 100) && ('summary' in article) && (typeof article.summary === 'string') && (article.summary.length < 200) && ('createdAt' in article) && ((article.createdAt instanceof Date)) && ('author' in article) && (typeof article.author === 'string') && ('content' in article) && (typeof article.content === 'string'));
}

module.exports.validateArticle2 = function (article) {
  article = article || {};
  return (('title' in article) && (typeof article.title === 'string') && (article.title) && (article.title.length < 101) && ('summary' in article) && (typeof article.summary === 'string') && (article.summary) && (article.summary.length < 200) && ('content' in article) && (typeof article.content === 'string') && (article.content));
}

module.exports.editArticle = function (id, article) {
  id = id || null;
  article = article || {};
  for (let i = 0; i < articles.length; i++) {
    if (id === articles[i].id) {
      console.log(articles[i]);
      if (articleModel.validateArticle2(article)) {
        if (article.title) {
          articles[i].title = article.title;
        }
        if (article.summary) {
          articles[i].summary = article.summary;
        }
        if (article.img !== undefined) {
          articles[i].img = article.img;
        }
        if (article.content) {
          articles[i].content = article.content;
        }
        return true;
      }
      return false;
    }
  }
}

module.exports.getId = function (article) {
  return article.id;
}

module.exports.removeArticle = function (id) {
  id = id || null;
  for (var i = 0; i < articles.length; i++) {
    if (id === articles[i].id) {
      console.log(articles[i]);
      articles.splice(i, 1);
      return true;
    }
  }
  return false;
}

module.exports.addArticle = function (article) {
  article = article || {};
  article.id = (maxId + 1) + '';
  console.log(article);
  articles.push(article);
  console.log('2: ' + article);
  maxId++;
  console.log('добавление прошло  ');
}

module.exports.getArticlesCount = function () {
  return articles.length;
}
