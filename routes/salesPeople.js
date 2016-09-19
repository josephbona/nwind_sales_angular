const router = require('express').Router();
const models = require('../db').models;
const SalesPerson = models.SalesPerson;

module.exports = router;

router.get('/', function(req, res, next) {
  SalesPerson.findAll()
    .then(function(results) {
      res.send(results);
    })
    .catch(next);
});

router.post('/', function(req, res, next) {
  SalesPerson.create({ name: req.body.name })
    .then(function(result) {
      res.send(result);
    })
    .catch(next);
});

router.delete('/:id', function(req, res, next) {
  SalesPerson.destroy({ where: { id: req.params.id } })
    .then(function() {
      res.sendStatus(200);
    })
    .catch(next);
});