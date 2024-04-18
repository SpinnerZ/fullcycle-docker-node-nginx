const { validationResult } = require('express-validator');
const database = require('../db');

const initDatabase = (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS names(id int AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), PRIMARY KEY(id))';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
};

const getNames = (req, res) => {
    const sqlQuery = 'SELECT firstname, lastname FROM names';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'names': result });
    });
};

const addName = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const subscriber = {
            firstname: req.body.firstname,
            lastname: req.body.lastname
        };

        const sqlQuery = 'INSERT INTO names SET ?';

        database.query(sqlQuery, subscriber, (err, row) => {
            if (err) throw err;

            res.send('Registered successfully!');
        });
    }
};

module.exports = {
    initDatabase,
    getNames,
    addName
}