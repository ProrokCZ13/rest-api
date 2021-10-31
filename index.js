const express = require('express');
const cors = require('cors');
const PORT = 3000;
const app = express();

//1
app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send({
        payload: id
    });
});

//2
app.get('/article/:java/:id', (req, res) => {
    const { java, id } = req.params;
    res.status(200).send({
        payload:java, id
    });
});

//3
app.get('/comment/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send({
        payload: id
    });
});

//4
app.post('/user', (req, res) => {
    const { name, age } = req.params;
    res.status(200).send({
        payload: name, age
    });
});

//5
app.post('/article', (req, res) => {
    const { title, category  } = req.params;
    res.status(200).send({
        payload: title, category
    });
});


//6
app.post('/category', (req, res) => {
    const { name } = req.params;
    res.status(200).send({
        payload: name
    });
});

//7
app.put('/user', (req, res) => {
    const { name, age } = req.params;
    res.status(200).send({
        payload: name, age
    });
});

//8
app.patch('/user', (req, res) => {
    const { id, name } = req.params;
    res.status(200).send({
        payload: id, name
    });
});

//9
app.delete('/article', (req, res) => {
    const { id } = req.params;
    res.status(200).send({
        payload: id
    });
});