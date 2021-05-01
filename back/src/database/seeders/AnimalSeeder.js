const Animal = require("../../models/Animal");
const faker = require('faker-br');

 const seedAnimal = async function () {

  const animais = [];

  for (let i = 0; i < 10; i++) {
    animais.push({
      status: "disponivel",
      nome: faker.name.firstName(),
      descricao: faker.lorem.words(),
      EnderecoId: faker.random.number({min:1, max:10}),
      UserId: faker.random.number({min:1, max:10})
    });
  }

  try {
    await Animal.sync({ force: true });
    await Animal.bulkCreate(animais);

  } catch (err) { console.log(err); }
}

module.exports = seedAnimal;