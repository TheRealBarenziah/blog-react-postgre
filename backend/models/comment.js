'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    originalPostId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    isAuthorModerator: DataTypes.BOOLEAN,
    hasBeenEdited: DataTypes.BOOLEAN
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, { foreignKey: 'authorId', as: 'author' });
    Comment.belongsTo(models.Thread, {as: 'thread', foreignKey: 'threadId'});
    Comment.hasMany(models.Picture, { as: 'pictures' });
  };
  return Comment;
};