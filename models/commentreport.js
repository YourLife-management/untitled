'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CommentReport extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    CommentReport.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'CommentReport',
    });
    return CommentReport;
};