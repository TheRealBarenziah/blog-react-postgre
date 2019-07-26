'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OriginalPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      threadId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Threads',
          foreignKey: 'id'
        }
      },
      title: {
        type: Sequelize.STRING
      },
      subtitle: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      isAuthorModerator: {
        type: Sequelize.BOOLEAN
      },
      hasBeenEdited: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OriginalPosts');
  }
};