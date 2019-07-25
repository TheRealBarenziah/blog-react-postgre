const models = require('../models');
const faker = require('faker');
const Comment = models.Comment;

for (let i = 0; i < 500; i++) {
  Comment.create({
    content: faker.lorem.paragraph(),
    subtitle: faker.hacker.phrase(),
    userId: Math.floor((Math.random() * 49) + 1),
    originalPostId: Math.floor((Math.random() * 99) + 1),
    isAuthorModerator: false,
    hasBeenEdited: false
  })
    .then(() => console.log('"The seed is strong." -Ned Stark'))
    .catch((error) => console.log(error));
}