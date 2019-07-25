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
    OriginalPost.belongsTo(models.User, { as: 'author' });
    OriginalPost.belongsTo(models.Thread, { as: 'thread' });
    OriginalPost.hasMany(models.Comment, { as: 'comments' });
    OriginalPost.belongsToMany(models.Picture, { as: 'pictures', through: 'OriginalPostPictures'});
  };
  return OriginalPost;
};