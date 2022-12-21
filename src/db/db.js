const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt')
const users= require('../users/user')
const user_chanel= require('../users/userChanel')
const { DataTypes } = require("sequelize")




const sequelize = new Sequelize('users', 'postgres', 'omega', {
    host: 'localhost',
    dialect: 'postgres'
  });



  sequelize.authenticate()
  .then(_=> console.log('La connexion a été établi'))
  .catch(error =>console.error(`impossible de se connecter a la base de donnée ${error}`))




  const user = users(sequelize, DataTypes)
  const userChanel= user_chanel(sequelize, DataTypes)
  sequelize.sync()
  .then(_=>{  
      console.log('la connexion de la base de donnée a bien été synchronisé')
  }),

  module.exports =sequelize