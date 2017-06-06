var request = require('request');
var fs = require('fs');
let arg = process.argv.slice(2);

console.log('Welcome to the GitHub Avatar Downloader!');


var GITHUB_USER = process.env.GITHUB_USER;
var GITHUB_TOKEN = process.env.GITHUB_TOKEN;

console.log('GitHub user: ', GITHUB_USER, 'token: ', GITHUB_TOKEN)

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    "url": requestURL,
    "method": "GET",
    "headers": {
      'User-Agent' : 'GitHub Avatar Downloader - Student Project'
    }
  };

  request.get(options, function(err, response, body) {
    if (err) {
      console.error (err);
    }
    var data = JSON.parse(body);
    cb(err, data);
  });
}

function downloadImageByURL(url, filePath) {
  //console.log('downloading... ', url, filePath)
   request.get(url).pipe(fs.createWriteStream(filePath));
}

if (!arg[0] || !arg[1]) {
  console.log("Errors:", error);
  throw "Input must be two arguments";;
}

getRepoContributors(arg[0], arg[1], function(error, result) {
  for (var i = 0; i < result.length; i++) {
    downloadImageByURL(result[i].avatar_url, './avatars/' + result[i].login + '.png');
  }

});
