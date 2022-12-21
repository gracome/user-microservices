const { DataTypes } = require("sequelize")
const users= require('./user')
const channel= require('../chanels/channel')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_chanel', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      user_id: {
        type: DataTypes.INTEGER,
        FOREIGNKEY: (users.id),REFERENCES: users
      },
      channel_id: {
        type: DataTypes.INTEGER,
        FOREIGNKEY: (channel.id),REFERENCES: channel
      },
      
    })
  }

  