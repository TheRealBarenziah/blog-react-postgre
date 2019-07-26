'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATE
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      isAdmin: {
        type: Sequelize.BOOLEAN
      },
      isCaterpillar: {
        type: Sequelize.BOOLEAN
      },
      isModerator: {
        type: Sequelize.BOOLEAN
      },
      gradeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Grades',
          foreignKey: 'id'
        }
      },
      avatarId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Avatars',
          foreignKey: 'id'
        }
      },
      flair: {
        type: Sequelize.STRING
      },
      signature: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Users');
  }
};