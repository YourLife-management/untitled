'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserInfos', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(14),
          references: {
            model: 'UserAuths',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
      firstName: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      country: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      sex: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      education: {
        type: Sequelize.STRING(60)
      },
      aboutYourself: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserInfos');
  }
};