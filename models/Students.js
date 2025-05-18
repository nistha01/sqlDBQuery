const {Sequelize,DataTypes}= require('sequelize');
const sequelize=require('../utils/dbConnections');


const Student=sequelize.define('Student',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
      },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=Student;