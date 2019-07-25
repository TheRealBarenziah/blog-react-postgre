'use strict';
module.exports = (sequelize, DataTypes) => {
  const PrivateMessage = sequelize.define('PrivateMessage', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    isRead: DataTypes.BOOLEAN
  }, {});
  PrivateMessage.associate = function(models) {
    PrivateMessage.belongsTo(models.User, { foreignKey: 'authorId'});
    PrivateMessage.belongsTo(models.User, { foreignKey: 'recipientId'});
  };
  return PrivateMessage;
};