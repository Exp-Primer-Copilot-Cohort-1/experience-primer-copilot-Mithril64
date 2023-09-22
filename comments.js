// Create web server
// Start server: node comments.js
// Test: http://localhost:3000/comments?postId=1
// Test: http://localhost:3000/comments?postId=1&name=abc
// Test: http://localhost:3000/comments?postId=1&name=abc&email=xyz
// Test: http://localhost:3000/comments?postId=1&name=abc&email=xyz&body=hello
// Test: http://localhost:3000/comments?postId=1&name=abc&email=xyz&body=hello&postId=1
// Test: http://localhost:3000/comments?postId=1&name=abc&email=xyz&body=hello&postId=1&postId=2
// Test: http://localhost:3000/comments?postId=1&name=abc&email=xyz&body=hello&postId=1&postId=2&postId=3
// Test: http://localhost:3000/comments?postId=1&name=abc&email=xyz&body=hello&postId=1&postId=2&postId=3&postId=4
// Test: http://localhost:3000/comments?postId=1&name=abc&email=xyz&body=hello&postId=1&postId=2&postId=3&postId=4&postId=5
// Test: http://localhost:3000/comments?postId=1&name=abc&email=xyz&body=hello&postId=1&postId=2&postId=3&postId=4&postId=5&postId=6
// Test: http://localhost:3000/comments?postId=1&name=abc&email=xyz&body=hello&postId=1&postId=2&postId=3&postId=4&postId=5&postId=6&postId=7

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function(req, res) {
    const parsedUrl = url.parse(req.url);
    const parsedQs = querystring.parse(parsedUrl.query);
    console.log(parsedQs);
    res.end(JSON.stringify(parsedQs));
});

server.listen(3000, function() {
    console.log('Server is running at port 3000');
});
