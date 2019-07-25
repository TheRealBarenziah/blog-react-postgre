const models = require('../models');
const faker = require('faker');
const BlogPost = models.BlogPost;

for (let i = 0; i < 100; i++) {
  BlogPost.create({
    title: faker.hacker.phrase(),
    content: faker.lorem.paragraph(),
    userId: 1,
    isForCaterpillar: false,
    postedAt: faker.date.past(),
    category: faker.hacker.verb()
  }, {include: 'pictures'})
    .then(() => console.log('"The seed is strong." -Ned Stark'))
    .catch((error) => console.log(error));
}