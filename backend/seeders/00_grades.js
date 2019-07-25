const models = require('../models');
const Grade = models.Grade;
const faker = require('faker');

const names = ['Novice', 'Utilisateur', 'Habitué', 'Modérateur', 'Administrateur'];
names.forEach(function (name) {
  Grade.create({
    name: name,
    description: faker.hacker.phrase()
  })
    .then((user) => console.log(user))
    .catch((error) => console.log(error));
});