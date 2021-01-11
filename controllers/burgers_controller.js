const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log('hbsObject', hbsObject);
        res.render('index', hbsObject);
    });
});

//Insert one more burger into the list
router.post('/api/newburger', (req, res) => {
    console.log(req.body.burger_name, req.body.devoured);
    burger.insertOne(req.body.burger_name, req.body.devoured, (result) => {
        res.json({ id: result.insertId });
    });
});

//Devour a burger - setting devoured to true
router.put('/api/eat/:id', (req, res) => {
    burger.updateOne(req.params.id, (result) => {
        res.json({ id: result.insertId });
    });
});


module.exports = router; 