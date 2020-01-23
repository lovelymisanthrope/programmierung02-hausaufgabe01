const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* const inputName = document.getElementById('login');
const inputComment = document.getElementById('comments');
 */

app.use(express.static('messages-homework'));

app.post("/comments", function (request, response) {
    console.log('login', request.query.login);
    console.log('comments', request.query.comments);

    response.send('Comment: ' + inputName + inputComment);
});

app.listen(8000, () => {
    console.log('Help me, I am lost!');
});