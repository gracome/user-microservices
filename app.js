const express = require('express');
const app = express();
const port = 2000;
const cors = require("cors");
const sequelize= require('./src/db/db')
const bcrypt = require('bcrypt')
const sequelise= require('sequelize')
const _ = require("lodash");
const jwt = require('jsonwebtoken');
const passport = require("passport");
const bodyParser = require('body-parser')


app
.use(express.json())
.use(bodyParser.json())
.use(cors({origin: '*'}))

require("./config/passport");




require('./src/users/users_routes').config(app)

console.log("hello");
app.listen(port, () => {
    console.log(`App is running on port ${port}.`);
  });