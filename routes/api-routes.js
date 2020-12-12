var router = require("express").Router();
var notes = require("../db/db.json");

router.get("/api/notes", function(req, res){
    return res.json(notes);
});

router.post("/api/notes", function(req, res){

})

// router.delete("/api/notes/:id", function(req, res){

// })

module.exports = router;