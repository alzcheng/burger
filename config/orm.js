const connection = require("./connection");

const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput}`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne(table, burger_name, devoured, cb) {
        let queryString = `INSERT INTO ${table}`;
        queryString += ` (burger_name, devoured) `;
        queryString += `VALUES (?,?);`;

        console.log(queryString);

        connection.query(queryString,
            [burger_name, devoured],
            (err, result) => {
                if (err) throw err;
                cb(result);
            });
    },
    updateOne(table, id, cb) {
        let queryString = `UPDATE ${table}`;
        queryString += ` SET devoured = 1 `;
        queryString += `WHERE id = (?)`;

        console.log(queryString);

        connection.query(queryString,
            id,
            (err, result) => {
                if (err) throw err;
                cb(result);
            });
    },
};

module.exports = orm;