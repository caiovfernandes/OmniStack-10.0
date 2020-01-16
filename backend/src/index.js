const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:<password>@cluster0-zpcmd.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req,res) => {
    return res.send('Hello bb')
});

app.listen(3000);
