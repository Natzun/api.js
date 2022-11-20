const express = require('express');
const routes = express.Router();

let db = [
    { '1': { name: 'Natzun', Idade: '22' } },
    { '2': { name: 'Dudushy', Idade: '21' } },
    { '3': { name: 'Fulanodetal', Idade: '20' } },
];
console.log(db);

// Buscar Dados
routes.get('/', (req, res) => {
    return res.json(db);
});

// Inserir Dados
routes.post('/add', (req, res) => {
    const body = req.body;

    if (!body)
        return res.status(400).end();

    db.push(body);
    return res.json(body);
});

routes.delete('/del/:id', (req, res) => {
    const id = req.params.id;

    let newDB = db.filter(item =>{
        if(!item[id])
        return item;
    });

    db = newDB;

    return res.send(newDB);
});

routes.put('/put/:id', (req, res) => {
    const modifyID = req.params.id;
    const body = req.body;

    db[modifyID] = {[modifyID]: body};

    return res.json(db[modifyID]); // vai retornar tudo que editou
});

module.exports = routes;