const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/celebridades");
const Celebrity = require("./models/Celebrity.js");

const celebrityData = [
  { 
    name: 'Alicia Juarez', 
    occupation: 'Ironhacker', 
    catchPhrase: 'Yuu huuuu!' 
  },
  { 
    name: 'Betsy Mendoza', 
    occupation: 'Ironhacker', 
    catchPhrase: 'En teoria...'   
  },
  { 
    name: 'Davina Roca', 
    occupation: 'Ironhacker', 
    catchPhrase: 'Jota son' 
  }
];

Celebrity.create(celebrityData, function(err, result){
  if(err) console.log("It does not work");
  console.log("It works!", result);
});

mongoose.connect.close();