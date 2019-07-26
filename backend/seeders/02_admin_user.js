const models = require('../models');
const User = models.User;
const faker = require('faker');

User.create({
  firstName: 'Daenerys',
  lastName: 'Targaryen',
  email: 'dstormborn@dragonstone.ovl',
  password: 'dracarys',
  username: 'Dany',
  avatarId: Math.floor((Math.random() * 49) + 1),
  isAdmin: true,
  isCaterpillar: false,
  isModerator: true,
  birthdate: faker.date.past(),
  gradeId: 4,
  flair: faker.hacker.verb(),
  signature: faker.hacker.phrase()
}, {})
  .then((user) => console.log('Dany created.'))
  .catch((error) => console.log(error));


User.create({
  firstName: 'Caemue',
  lastName: 'La chenue',
  email: 'definitelynotastalker@gmail.com',
  password: 'password',
  username: 'Öooo',
  avatarId: Math.floor((Math.random() * 49) + 1),
  isAdmin: false,
  isCaterpillar: true,
  isModerator: false,
  birthdate: faker.date.past(),
  gradeId: 2,
  flair: faker.hacker.verb(),
  signature: faker.hacker.phrase()
}, {})
  .then((user) => console.log('Caterpillar created.'))
  .catch((error) => console.log(error));