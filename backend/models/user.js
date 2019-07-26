'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    isCaterpillar: DataTypes.BOOLEAN,
    isModerator: DataTypes.BOOLEAN,
    gradeId: DataTypes.INTEGER,
    avatarId: DataTypes.INTEGER,
    flair: DataTypes.STRING,
    signature: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.OriginalPost, {as: 'originalPosts' });
    User.hasMany(models.PrivateMessage, {as: 'privateMessages' });
    User.hasMany(models.BlogPost, {as: 'blogPosts' });
    User.hasMany(models.Comment, {as: 'comments' });
  };
  return User;
};