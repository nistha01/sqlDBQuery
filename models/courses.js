const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../utils/dbConnections')


const courses=sequelize.define('courses',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,

    }
})
module.exports=courses;