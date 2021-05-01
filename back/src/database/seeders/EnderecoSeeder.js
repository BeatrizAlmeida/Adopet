const Endereco = require("../../models/Endereco");
const faker = require('faker-br');

 const seedEndereco = async function () {

  const enderecos = [];

  for (let i = 0; i < 10; i++) {
    enderecos.push({
      rua: faker.address.streetAddress(),
      cidade: faker.address.city(),
      bairro: faker.address.city(),
      cep: faker.address.zipCode(),
      numero: faker.random.number()
    });
  }

  try {
    await Endereco.sync({ force: true });
    await Endereco.bulkCreate(enderecos);

  } catch (err) { console.log(err); }
}

module.exports = seedEndereco;