var express = require("express");

var router = express.Router();

//Import the model(burger.js) to use its database functions

var burger = require("../models/burger.js");

// create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    //console.log(req)
    burger.create([
        "burger_name", "devoured"
          ],[
            req.body.burger_name, req.body.devoured
          ],
          function(result){
        res.json({id: result.insertId});
            //send back the ID of the new quote
         
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRow == 0){
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result){
        if (result.affectedRows == 0) {
            //If no rows were chnaged, then the ID must not exist, so 404
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
})

//export routes for server.js to use

module.exports = router;