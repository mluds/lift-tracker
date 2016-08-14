const app = require('./app.js');

app.get('/', (req, res) => {
    res.sendFile('static');
});
