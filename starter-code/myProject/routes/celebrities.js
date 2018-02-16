var express = require('express');
var router = express.Router();
const Celebrity = require("../models/Celebrity");

//mi ruta
router.get("/", (req,res)=>{
  Celebrity.find({}, (err, docs)=>{
    console.log(docs);
    if(err) res.status(500).send(err);
    res.render("celebrities/index", { celebrities:docs });
  });
});

module.exports = router;