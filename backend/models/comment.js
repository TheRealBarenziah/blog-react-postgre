'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.STRING,
    isAuthorModerator: DataTypes.BOOLEAN,
    hasBeenEdited: DataTypes.BOOLEAN
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, { as: 'author' });
    Comment.belongsToMany(models.Picture, { as: 'pictures', through: 'CommentaryPictures'});
  };
  return Comment;
};