const dotenv = require("dotenv").config();

var Twitter = require("twitter");
//var spotify = require("spotify");

var keys = require("./keys.js");


var client = new Twitter(keys.twitter);
//var spotify = new spotify(keys.spotify);

const inputString = process.argv;
const action = inputString[2];

var params = { screen_name: 'dshack746' };


if (action === "my-tweets"){
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});}

