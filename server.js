const express = require('express');
const fs = require('fs');

const server = express();

const port = 3000;
server
    .get('/', (req, res) => {
        fs.readFile('./index.html', (err, html) => {
            if (err) {
                throw new Error(err);
            }
            res.write(html);
            res.end();
        })
    })
    .use('/static', express.static('public'))
    .listen(port, () => {
        console.log('hello server. port:', port);
    });
