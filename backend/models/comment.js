'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.STRING,
    isAuthorModerator: DataTypes.BOOLEAN,
    hasBeenEdited: DataTypes.BOOLEAN
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, { foreignKey: 'authorId', as: 'author' });
    Comment.belongsTo(models.Picture, { as: 'pictures' });
    Comment.belongsTo(models.Thread, {as: 'thread', foreignKey: 'threadId'});
  };
  return Comment;
};