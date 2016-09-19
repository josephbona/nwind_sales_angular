const expect = require('chai').expect;
const db = require('../db');
const client = require('supertest-as-promised')(require('../app'));

describe('routes', function(){
  before(function(done){
    db.sync()
      .then(function(){
        console.log('synched');
        done();
      })
      .catch(done);
  });

  beforeEach(function(done){
    db.truncate()
      .then(function(){
        done();
      })
      .catch(done);
  });

  describe('salesPeople', function(){

    describe('POST', function(){
      it('creates a salesperson', function(done){
        client.post('/api/salesPeople')
          .send({ name: 'Joe' })
          .then(function(result){
            expect(result.status).to.equal(200);
            return client.get('/api/salesPeople');
          })
          .then(function(result){
            expect(result.status).to.equal(200);
            expect(result.body.length).to.equal(1);
            done();
          });

      });
    });
    describe('DELETE', function(){
      it('deletes a salesperson', function(done){
        client.post('/api/salesPeople')
          .send({ name: 'Joe' })
          .then(function(result){
            expect(result.status).to.equal(200);
            expect(result.body.name).to.equal('Joe');
            return client.delete('/api/salesPeople/' + result.body.id)
          })
          .then(function(result){
            expect(result.status).to.equal(200);
            done();
          });
      });
    });
  });

  describe('regions', function() {

    describe('POST', function() {
      it('creates a region', function(done) {
        client.post('/api/regions')
          .send({ zipcode: '11105' })
          .then(function(result) {
            expect(result.status).to.equal(200);
            return client.get('/api/regions');
          })
          .then(function(result) {
            expect(result.status).to.equal(200);
            expect(result.body.length).to.equal(1);
            done();
          });
      });
    });
    describe('DELETE', function(){
      it('deletes a region', function(done){
        client.post('/api/regions')
          .send({ zipcode: 11105 })
          .then(function(result){
            expect(result.status).to.equal(200);
            expect(result.body.zipcode).to.equal(11105);
            return client.delete('/api/regions/' + result.body.id)
          })
          .then(function(result){
            expect(result.status).to.equal(200);
            done();
          });
      });
    });
  });
});