'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Messages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(50)
            },
            idChat: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            idUser: {
                type: Sequelize.INTEGER(14),
            },
            typeMsg: {
                type: Sequelize.INTEGER(1),
                allowNull: false,
                defaultValue: 0
            },
            message: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        }).then(function() {
                return queryInterface.sequelize.query(
                    'ALTER TABLE `Messages` ADD FOREIGN KEY (`idChat`) REFERENCES `Chats`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;'
                )}).then(function() {
            return queryInterface.sequelize.query(
                'ALTER TABLE `Messages` ADD FOREIGN KEY (`idChat`) REFERENCES `GroupChats`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;'
            )}).then(function() {
            return queryInterface.sequelize.query(
                'ALTER TABLE `Messages` ADD FOREIGN KEY (`idUser`) REFERENCES `Chats`(`idUser`) ON DELETE SET NULL ON UPDATE CASCADE;'
            )}).then(function() {
            return queryInterface.sequelize.query(
                'ALTER TABLE `Messages` ADD FOREIGN KEY (`idUser`) REFERENCES `Chats`(`idUser2`) ON DELETE SET NULL ON UPDATE CASCADE;'
            )}).then(function() {
            return queryInterface.sequelize.query(
                'ALTER TABLE `Messages` ADD FOREIGN KEY (`idUser`) REFERENCES `ChatParticipants`(`idUser`) ON DELETE SET NULL ON UPDATE CASCADE;'
            )}).then(function() {
            return queryInterface.sequelize.query(
                'ALTER TABLE `Messages` ADD FOREIGN KEY (`idChat`) REFERENCES `ChatParticipants`(`idChat`) ON DELETE CASCADE ON UPDATE CASCADE;'
            )}).then(function() {
            return queryInterface.sequelize.query(
                'ALTER TABLE `Messages` ADD FOREIGN KEY (`idUser`) REFERENCES `GroupChats`(`idUser`) ON DELETE SET NULL ON UPDATE CASCADE;'
            )});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Messages');
    }
};