var express = require('express');
var router = express.Router();
const Celebrity = require("../models/Celebrity");

//mi ruta
router.get("/", (req,res)=>{
  Celebrity.find({}, (err, data)=>{
    // if(err) res.status(500).send(err);
    res.render("./celebrities/index", { celebrities:data });
  });
});

router.get("/celebrities/:id", (req,res)=>{
  const id = req.params.id;
  Celebrity.findById(id, (err, data)=>{
    res.render("./celebrities/show",{celebrities:data});
  });
});

module.exports = router;