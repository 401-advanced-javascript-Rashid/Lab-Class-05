'use strict';


const Interface = require('../Mongo-model-interface');
const schema = require('../schemas/products-S') ;

class Products extends Interface {
  constructor(){
    super(schema);
  }
}


module.exports = Products ;