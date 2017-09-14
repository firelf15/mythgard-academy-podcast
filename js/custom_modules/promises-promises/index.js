var promiseRss = require('./promiseRss');
var feedUrl = 'http://media.signumuniversity.org/mythgardacademy/feed';
var audioItems = [];
// var kowabunga;

module.exports = promiseRss(feedUrl).then(function (rss) {
    console.log("bravo: audioAssets.js");
    // console.log(rss);
    return rss;
  }).then(function(rss) {
    var count = Object.keys(rss.items).length;
    var http;
    var i;
    var title;
    var url;
    for (i = 0; i < count; i++) {
      title = rss.items[i].title;
      http = rss.items[i].enclosures[0].url;
      url = http.replace(/^http:\/\//i, 'https://');
      audioItems.push({ title, url });
    }
    console.log("delta: " + audioItems[2]['title']);
    return audioItems;
  }). then(function(audioItems) {
    kowabunga = audioItems;
    console.log("echo: " + kowabunga[2]['url']);
    return kowabunga;
  });
