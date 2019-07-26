'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      originalPostId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'OriginalPosts',
          foreignKey: 'id'
        }
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
    return queryInterface.dropTable('Comments');
  }
};