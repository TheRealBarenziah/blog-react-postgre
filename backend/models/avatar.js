'use strict';
module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define('Avatar', {
    url: DataTypes.STRING
  }, {});
  Avatar.associate = function(models) {
    Avatar.belongsTo(models.User);
  };
  return Avatar;
};