// Audio Source - Mythgard Academy : http://media.signumuniversity.org/mythgardacademy/feed
const Feed = require('rss-to-json');

module.exports = function(url) {
  var url = 'http://media.signumuniversity.org/mythgardacademy/feed';
  return new Promise((resolve, reject) => {
    // TODO - only use data required
    Feed.load(url, (err, rss) => {
      if (err) {
        reject(err);
      } else {
        resolve(rss);
      }
    });
  });
};