'use strict';

// Audio Source - Mythgard Academy Podcast : http://media.signumuniversity.org/mythgardacademy/feed
/*var audioData = [
    {
        'title' : 'MSA001: The Fellowship of the Ring, Lecture 2',
        'url' : 'https://s3.amazonaws.com/media.mythgardacademy/MSA001_LOTRI/MSA001_Olsen_2012-07-12_Class02_PartII.mp3'
    },
    {
        'title' : 'MSA001: The Fellowship of the Ring, Lecture 1',
        'url' : 'https://s3.amazonaws.com/media.mythgardacademy/MSA001_LOTRI/MSA001_Olsen_2012-07-11_Class01_PartI.mp3'
    }
];

module.exports = audioData;*/

var constants = require('./constants');
var Feed = require('rss-to-json');
// var startingText = 'var audioData = [';
// var closingText = '];';

 
Feed.load('http://media.signumuniversity.org/mythgardacademy/feed', function(err, rss){
    console.log('var audioData = [');
    var count = Object.keys(rss.items).length;
    // loop through each item except the last because trailing comma
    for (var i = 0; i < (count - 1); i++) {
      var startingItemString = "{ 'title' : '";
      var itemTitle = rss.items[i].title;
      var midItemString = ", 'url' : '";
      var itemUri = rss.items[i].enclosures[0].url;
      var closingItemString = "' },";
      console.log(startingItemString + itemTitle + midItemString + itemUri + closingItemString);
    }
      // last item
      console.log('{');
      console.log(rss.items[count - 1].title);
      console.log(midItemString);
      console.log(rss.items[count - 1].enclosures[0].url);
      console.log('}');

    console.log('];');
});





