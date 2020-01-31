  
'use strict';


const Interface = require('../Mongo-model-interface');
const schema = require('../schemas/categories-S') ;

class Catagories extends Interface {
  constructor(){
    super(schema);
  }
}


module.exports = Catagories ;