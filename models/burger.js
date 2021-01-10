// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },

    insertOne(burger_name, devoured, cb) {
        orm.create('burgers', burger_name, devoured, (res) => cb(res));
    },

    updateOne(burger_name, devoured, cb) {
        orm.updateOne('burgers', burger_name, devoured, (res) => cb(res));
    },
};

module.exports = burger;
