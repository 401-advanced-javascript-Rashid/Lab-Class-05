'use strict';

require('@code-fellows/supergoose') ;
const Categories = require('../models/categories.js');

describe('Categories Model', () => {

  let categories;
  beforeEach(() => {
    categories = new Categories();
  });

  it('can post() a new category data in the DB', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can read() a category data from DB', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.read(record._id)
          .then(category => {
            expect(obj.name).toEqual(category.name);
          });
      });
  });

  it('can delete() a category data from DB', () => {

    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.delete(record._id)
          .then(() => {
            return categories.read(record._id)
              .then(data => {
                expect(data).toEqual(null);
              });
          });
      });
  });

  it('can update() category data in the DB', () => {
    let obj = { name: 'Test Category' };
    let object = {name: 'Update Category'};
    return categories.create(obj)
      .then( data => {
        return categories.update(data._id , object)
          .then(data => {
            expect(object.name).toEqual(data.name);
          });
      });
  });

});