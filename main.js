const {XMLHttpRequest} = require("xmlhttprequest");
const http = new XMLHttpRequest();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const inputName = document.getElementById('login');
const inputComment = document.getElementById('comments');

app.use(express.static('messages-homework'));

app.get("post", function (request, response) {
    console.log('login', request.query.login);
    console.log('comments', request.query.comments);

    response.send('Comment: ' + inputName + inputComment);
});

app.listen(port, () => {
    console.log('Help me, I am lost!');
});


http.open("GET", "index.html");

http.addEventListener('load', function() {
    if (http.status >= 200 && http.status < 300) {
        console.log(http.responseText);
    } else {
        console.warn(http.statusText, http.responseText);
    }
});

http.send();


