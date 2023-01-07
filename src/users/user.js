const { DataTypes } = require("sequelize")

module.exports = function(sequelize, Sequelize) {
    const User = sequelize.define('utilisateur', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        prenom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: true,
        },

        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            notEmpty: true,
        },
    },)
    User.prototype.validPassword = function (password) {
        return this.password === password
    }

    return User
}