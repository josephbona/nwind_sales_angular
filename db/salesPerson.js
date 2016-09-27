const db = require('./_db');
const SalesPerson = db.define('salesPerson', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false
  }
});

module.exports = SalesPerson;
