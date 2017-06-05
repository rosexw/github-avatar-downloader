# GitHub Avatar Downloader

## Problem Statement

Given a GitHub repository name and owner, download all the contributors' profile images and save them to a subdirectory, `avatars/`.

## Expected Usage

This program should be executed from the command line, in the following manner:

`node download_avatars.js jquery jquery`

... (whatever else you'd like to include)




Prep
Schedule
Projects
Interviews
Classmates
Teachers
Feedback (2)
Thumb img 0359Rose
Request Assistance
Teachers on duty

Thumb zach sailing823552?v=3
W2D1
Mon Jun 5
W112345eW212345eW312345eW412345eW512345eW612345eW712345eW812345e
Yesterday Today
GitHub Avatar Downloader
What is an API
Welcome To Your First Project
GitHub API: Intro and Setup
Github API: Contributors Endpoint
Setup Project Repo
Implement getRepoContributors
Implement downloadImageByURL
Support Command Line Arguments
Submit Your Project
Config File for Secrets
Handle Errors
Recommended Repos
Submit
 Implement getRepoContributors Assignment
Project: GitHub Avatar Downloader
 Mark Completed  Give Feedback Duration 120m
Next: Implement downloadImageByURL
Previous: Setup Project Repo
This activity should help you progress with a project:

w2d1
→
w2d1
GitHub Avatar Downloader
Not Submitted
2okjjmkw+
A command line node app that uses HTTP to retrieve content from GitHub using their API and writes content to disk. Two day project.

Goal
In this activity, you will partially implement a single function called getRepoContributors. Using the request package, you will fetch the list of contributors as a JSON string from the GitHub API's contributors endpoint. Upon receiving the results, your function will invoke a callback function with the results. This callback function will loop over and print out the avatar_url for each object in the collection.

Exercise
Step 1: Setup js code file
First, we need our one and only JS file that will consist of our node app.

Create your main code file, called download_avatars.js
touch download_avatars.js
Step 2: Load the request module
Since we know we'll need to use the request module that we've installed earlier, let's go ahead and require it:

var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');
You should now be able to execute this file from the command line, using node:

node download_avatars.js
Reminder: When you finish this step, it is a good time to commit and push your progress!

Step 3: Start the getRepoContributors function
In your download_avatars.js file, append the following function definition:

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
}
This function will use the request library to programmatically fetch the list of contributors via HTTPS for the given repo. You may want to open up the code and instructions for the previous activity where you learned about and used request.

Notice the last parameter in the function, cb, which provides a callback function in order to handle the asynchronous nature of results that are to be returned from getRepoContributors.

Recall that Node-style callback functions expect their first argument to be a placeholder for any errors that may have occurred, and the subsequent argument(s) are results being passed to the callback. This is why the first argument is called err. That said, we're going to implement the "happy path" first and eventually deal with err.

Below its definition, try calling (invoking) the getRepoContributors function using hard-coded values. It can look something like the following:

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
Note: Feel free to use any other public repository instead, such as this popular one.

When you run your file, while you shouldn't experience any errors, you will not see the output from the callback function. Our next step is to implement the getRepoContributors function.

Reminder: When you finish this step, it is a good time to commit and push your progress!

Step 4: Create the requestURL
To make the request to GitHub, you should use your GitHub username and access token, which you set up in the GitHub API: Intro & Setup exercise earlier today.

Above the getRepoContributors exercise, define the following constants with this information:

var GITHUB_USER = "YOUR USERNAME HERE";
var GITHUB_TOKEN = "YOUR ACCESSTOKEN HERE";
We now have all the data needed to construct our API request URL. The first thing your getRepoContributors function should therefore do is define a variable (called requestURL) which will concatenate all this information into a valid URL:

var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
As a good developer who works incrementally and validates each step of the process, your next move should be to test this value and ensure that we have the correct URL.

Use console.log to output the requestURL string and paste the URL in your browser to make sure it returns the contributor list in JSON format, as expected:

Screenshot

Reminder: When you finish this step, it is a good time to commit and push your progress!

Step 5: Make the request
Note: Read the Considerations section below before attempting this step.

Once you have validated that the URL is being assembled correctly, your next small step can be to make an HTTP request to it using the request function. You should have enough experience with this package (from this exercise) to implement this.

Considerations:

Remember that you want to work in small steps. To that end, this step should simply aim to fetch the body and log it to the console.
When you make a request using the traditional approach, you'll notice the following response from GitHub's API: Request forbidden by administrative rules. Please make sure your request has a User-Agent header (http://developer.github.com/v3/#user-agent-required). Check https://developer.github.com for other possible causes.
You will need to research how to modify the request and pass in this User-Agent header (which you can set to any string value, such as "GitHub Avatar Downloader - Student Project")
Reminder: When you finish this step, it is a good time to commit and push your progress!

Step 6: Print each avatar_url
Your next and final step in this exercise should be to change your getRepoContributors function to parse the JSON string into an object and pass this object (an array of contributor objects) to the cb function.

You will also need to modify the callback function to iterate over the results and (for now) console.log the value for each avatar_url in the collection:

Screenshot

Reminder: When you finish this step, it is a good time to commit and push your progress!
