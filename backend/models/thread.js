'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    name: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    isModeratorOnly: DataTypes.BOOLEAN,
    isUserOnly: DataTypes.BOOLEAN
  }, {});
  Thread.associate = function(models) {
    Thread.hasMany(models.User, { as: 'moderator'});
    Thread.hasMany(models.OriginalPost, {as: 'originalPosts'});
  };
  return Thread;
};