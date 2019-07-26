'use strict';
module.exports = (sequelize, DataTypes) => {
  const OriginalPost = sequelize.define('OriginalPost', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    content: DataTypes.STRING,
    isAuthorModerator: DataTypes.BOOLEAN,
    hasBeenEdited: DataTypes.BOOLEAN
  }, {});
  OriginalPost.associate = function(models) {
    OriginalPost.belongsTo(models.User, { as: 'author', foreignKey: 'authorId'});
    OriginalPost.belongsTo(models.Thread, { as: 'thread', foreignKey: 'threadId' });
    OriginalPost.hasMany(models.Comment, { as: 'comments' });
    OriginalPost.hasMany(models.Picture, { as: 'pictures' });
  };
  return OriginalPost;
};