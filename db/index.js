const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

const SalesPerson = db.define('salesPerson', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Region = db.define('region', {
  zipcode: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

function syncAndSeed(){
  return db.sync({ force: true })
    .then(function(){
      return Promise.all([
        SalesPerson.create({ name: 'Joe' }),
        SalesPerson.create({ name: 'Frank' }),
        SalesPerson.create({ name: 'Mike' }),
        Region.create({ zipcode: '11738' }),
        Region.create({ zipcode: '11105' }),
        Region.create({ zipcode: '90210' }),
      ]);
    });
}

module.exports = {
  syncAndSeed: syncAndSeed,
  models: {
    SalesPerson: SalesPerson,
    Region: Region
  }
}