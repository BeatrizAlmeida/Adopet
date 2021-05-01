require('../../config/dotenv')();
require('../../config/sequelize');

const seedUsers = require('./UserSeeder');
const seedAnimal = require('./AnimalSeeder');
const seedEndereco = require('./EnderecoSeeder');

(async () => {
  try {
    await seedEndereco();
    await seedUsers();
    await seedAnimal();
    

  } catch(err) { console.log(err) }
})();
