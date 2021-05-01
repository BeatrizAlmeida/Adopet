const User = require("../../models/User");
const faker = require('faker-br');

 const seedUser = async function () {

  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      email: faker.internet.email(),
      nome: faker.name.firstName(),
      telefone: faker.phone.phoneNumber(),
      senha: faker.lorem.word(),
      cpf: faker.br.cpf(),
      EnderecoId: faker.random.number({min:1, max:10})
    });
  }

  try {
    await User.sync({ force: true });
    await User.bulkCreate(users);

  } catch (err) { console.log(err); }
}

module.exports = seedUser;