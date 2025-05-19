const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../utils/dbConnections')


const department = sequelize.define('department',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:true,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING
    }
})
module.exports=department