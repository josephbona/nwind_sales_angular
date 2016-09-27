const db = require('./_db');

const Region = db.define('region', {
  zipcode: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Region;
