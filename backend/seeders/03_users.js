const models = require('../models');
const User = models.User;
const faker = require('faker');

for (let i = 0; i < 50; i++) {
  User.create({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: 'test1234',
    avatarId: Math.floor((Math.random() * 49) + 1),
    username: faker.internet.userName(),
    isAdmin: false,
    isCaterpillar: false,
    isModerator: false,
    birthdate: faker.date.past(),
    gradeId: Math.floor((Math.random() * 2) + 1),
    flair: faker.hacker.verb(),
    signature: faker.hacker.phrase()
  }, {})
    .then((user) => console.log('New user created.'))
    .catch((error) => console.log(error));
}