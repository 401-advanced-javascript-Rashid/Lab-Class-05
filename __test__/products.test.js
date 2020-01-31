'use strict';

require('@code-fellows/supergoose');
const Products = require('../models/products.js');

describe('Products Model', () => {


  let products;
  beforeEach(() => {
    products = new Products();
  });

  it('can post() a new product', () => {

    let obj = { tybe: 'PS4', price: 299 };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });


  it('can get() a products', () => {
    let obj = { tybe: 'XBOX-ONE', price: 249 };
    return products.create(obj)
      .then(record => {
        return products.read(record._id)
          .then(products => {
            expect(obj.name).toEqual(products.name);
          });
      });
  });


  it('can update() a products', () => {

    let obj = { tybe: 'PS4', price: 299 };
    return products.create(obj)
      .then(record => {
        record.price = 499;
        record.tybe = 'PS5';
        return products.update(record._id, record)
          .then(category => {
            expect(obj.name).toEqual(category.name);
          });
      });
  });

  it('can delete() a products data from DB', () => {

    let obj = { tybe: 'XBOX-ONE', price: 259 };
    return products.create(obj)
      .then(record => {
        return products.delete(record._id)
          .then(() => {
            return products.read(record._id)
              .then(data => {
                expect(data).toEqual(null);
              });
          });
      });
  });


});