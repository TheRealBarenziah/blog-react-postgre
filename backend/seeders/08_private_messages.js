const models = require('../models');
const faker = require('faker');
const PrivateMessage = models.PrivateMessage;

for (let i = 0; i < 500; i++) {
  PrivateMessage.create({
    title: faker.hacker.phrase(),
    content: faker.lorem.paragraph(),
    authorId: Math.floor((Math.random() * 49) + 1),
    recipientId: Math.floor((Math.random() * 49) + 1),
    isRead: false,
  })
    .then(() => console.log('"The seed is strong." -Ned Stark'))
    .catch((error) => console.log(error));
}