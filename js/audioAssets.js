var audioData;
var promisesPromises = require('./custom_modules/promises-promises').then(function(promisesPromises) {
  audioData = promisesPromises;
  console.log("foxtrot is: " + JSON.stringify(audioData));
  return audioData;
});

// console.log("foxtrot is: " + audioData);
// console.log("golf is: " + JSON.stringify(audioData));
exports.audioData = audioData;