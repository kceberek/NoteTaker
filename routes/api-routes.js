var router = require("express").Router();
var notes = require("../db/db.json");

router.get("/api/notes", function(req, res){
    return res.json(notes);
});

router.post("/api/notes", function(req, res){
    return res.json(notes);
})

router.delete("/api/notes/:id", function(req, res){
    return res.json(notes + id)

})

module.exports = router;