'use strict';
module.exports = (sequelize, DataTypes) => {
  const PrivateMessage = sequelize.define('PrivateMessage', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    recipientId: DataTypes.INTEGER,
    isRead: DataTypes.BOOLEAN
  }, {});
  PrivateMessage.associate = function(models) {
    PrivateMessage.belongsTo(models.User, { as: 'author', foreignKey: 'authorId'});
    PrivateMessage.belongsTo(models.User, { as: 'recipient', foreignKey: 'recipientId'});
  };
  return PrivateMessage;
};