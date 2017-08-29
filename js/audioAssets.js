'use strict';

var Feed = require('rss-to-json');

Feed.load('http://media.signumuniversity.org/mythgardacademy/feed', function(err, rss) {
  var audioItems = [];
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
  console.log(audioItems);
});

exports.audioData = function() {

}
