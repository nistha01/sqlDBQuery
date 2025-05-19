const {Sequelize,DataType, DataTypes}= require('sequelize');
const db= require('../utils/dbConnections');
const sequelize = require('../utils/dbConnections');


const IdentityCard=sequelize.define('IdentityCard',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:true,
    },
    cardNumber:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    }


})
module.exports=IdentityCard;