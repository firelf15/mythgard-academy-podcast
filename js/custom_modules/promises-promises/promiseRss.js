// Audio Source - Mythgard Academy : http://media.signumuniversity.org/mythgardacademy/feed
const Feed = require('rss-to-json');

module.exports = function(feedUrl) {
  var feedUrl = 'http://media.signumuniversity.org/mythgardacademy/feed';
  return new Promise((resolve, reject) => {
    // TODO - only use data required
    Feed.load(feedUrl, (err, rss) => {
      if (err) {
        reject(err);
      } else {
        console.log('alpha: promiseRss.js');
        resolve(rss);
      }
    });
  });
};