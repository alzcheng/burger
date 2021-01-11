// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },

    insertOne(burger_name, devoured, cb) {
        orm.insertOne('burgers', burger_name, devoured, (res) => cb(res));
    },

    updateOne(id, cb) {
        orm.updateOne('burgers', id, (res) => cb(res));
    },
};

module.exports = burger;
