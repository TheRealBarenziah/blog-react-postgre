const models = require('../models');
const faker = require('faker');
const OriginalPost = models.OriginalPost;
const Comment = models.Comment;

for (let i = 0; i < 100; i++) {
  OriginalPost.create({
    title: faker.hacker.phrase(),
    subtitle: faker.hacker.phrase(),
    content: faker.lorem.paragraph(),
    authorId: 1,
    threadId: Math.floor((Math.random() * 9) + 1),
    isAuthorModerator: false,
    hasBeenEdited: false
  }, {include: ['comments', 'pictures']})
    .then((post) => {
      Comment.findAll()
        .then((comments) => {
          const randomComment = comments[Math.floor(Math.random() * comments.length)];
          post.setComment(randomComment)
            .then((linkedCommentAndOriginalPost) => { console.log(linkedCommentAndOriginalPost); })
            .catch((error) => { console.log(error); });
        })
        .catch((error) => { console.log(error); });
    })
    .catch((error) => console.log(error));
}
