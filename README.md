# GitHub Avatar Downloader

## Problem Statement

Given a GitHub repository name and owner, download all the contributors' profile images and save them to a subdirectory, `avatars/`.

## Getting Started

Install all dependencies with the command "npm install"

## Expected Usage

Following the format: `node download_avatars.js <owner> <repo>`, this program should be executed from the command line, in the following manner:

`GITHUB_USER="username" GITHUB_TOKEN="token" node download_avatars.js jquery jquery`

Please fill in your own username and token into the quotes.

## Goal

In this activity, you will partially implement a single function called getRepoContributors. Using the request package, you will fetch the list of contributors as a JSON string from the GitHub API's contributors endpoint. Upon receiving the results, your function will invoke a callback function with the results. This callback function will loop over and print out the avatar_url for each object in the collection.

##Screenshot

!["An avatar example"](https://github.com/rosexw/github-avatar-downloader/blob/master/screenshot_of_avatar.png)
