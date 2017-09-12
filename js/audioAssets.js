var promiseRss = require('./promiseRss');
var url = 'http://media.signumuniversity.org/mythgardacademy/feed';

promiseRss(url).then(function (rss) {
  console.log(rss);
  return rss;
});