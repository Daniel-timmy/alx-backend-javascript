const http = require('http');

const app = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Hello Holberton School!');
    }
    if(req.url === '/students'){
        res.end('This is the list of our students');        
    }

    
});

app.listen(1245);

module.exports = app;