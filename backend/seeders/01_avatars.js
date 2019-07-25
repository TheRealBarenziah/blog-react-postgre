const models = require('../models');
const faker = require('faker');
const Avatar = models.Avatar;

for (let i = 0; i < 50; i++) {
  Avatar.create({
    url: faker.image.avatar()
  })
    .then(() => console.log('"The seed is strong." -Ned Stark'))
    .catch((error) => console.log(error));
}