var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "";
var GITHUB_TOKEN = "";


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
    var contributors = JSON.parse(body);
    cb(err, contributors);
  });
}

getRepoContributors("jquery", "jquery", function(error, result) {
  console.log("Errors:", error);
  console.log("Result:", result);
});
