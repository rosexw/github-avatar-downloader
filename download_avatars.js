var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "user";
var GITHUB_TOKEN = "token";


function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    "url": requestURL,
    "method": "GET",
    "headers": {
      'User-Agent' : 'GitHub Avatar Downloader - Student Project'
    }
  };

  request(options, function(err, response, body) {
    var data = JSON.parse(body);
    cb(err, data);
  });

  // function printAvatarURL (err, response) {
  //   for ()
  // }
}

getRepoContributors("jquery", "jquery", function(error, result) {
  for (var i=0; i<result.length; i++) {
    console.log(result[i].avatar_url);
  }
});
