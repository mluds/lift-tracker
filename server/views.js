import { app } from './app.js';

app.get('/', (req, res) => {
    res.render('index');
});
