var express = require("express");

var router = express.Router();

var burger = require("../models/burger");


router.get("/", (req, res) => {
    burger.selectAll(data => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(req.body.burgerName, data => {
        console.log("Inserted a burger into DB")
        res.sendStatus(200).end();
    });
});

router.put("/api/burgers/:id", (req, res) => {
    console.log(req.body);
    let intID = parseInt(req.params.id);
    let varTrue = true;
    burger.updateOne(varTrue, intID, data => {
        console.log(`Updated burger id=${req.params.id}!`);
        res.sendStatus(200).end();
    });
});

module.exports = router;