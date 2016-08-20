import express from 'express';

export var app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));
