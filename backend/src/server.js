const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
const connect_url = process.env.MONGODB_CON;

mongoose.connect(connect_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

app.use(routes);

app.listen(3333);