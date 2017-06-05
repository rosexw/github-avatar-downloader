var request = require('request');
var fs = require('fs');
var RepoContributors = require('./get-repo-contributors');

console.log('Welcome to the GitHub Avatar Downloader!');


getRepoContributors("jquery", "jquery", function(error, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
