const {XMLHttpRequest} = require("xmlhttprequest");
const http = new XMLHttpRequest();
const url = 'http://localhost:8000/comments';

http.open("POST", url);
http.setRequestHeader("Comment","test1");

http.addEventListener('load', function(readystatechange) {
    if (http.status >= 200 && http.status < 300) {
        console.log(http.responseText);
    } else {
        console.warn(http.statusText, http.responseText);
    }
});

http.send('Help I am lost');


