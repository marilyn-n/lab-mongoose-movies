var express = require('express');
var router = express.Router();
const Celebrity = require("../models/Celebrity");

//mi ruta
router.get("/", (req,res)=>{
  Celebrity.find({}, (err, data)=>{
    if(err) res.status(500).send(err);
    console.log(data);
    res.render("./celebrities/index", { celebrities:data });
  });
});

module.exports = router;