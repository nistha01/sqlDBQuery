const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../utils/dbConnections')



const studentCourses=sequelize.define('studentCourses',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:true,
        primaryKey:true
    }
})
module.exports=studentCourses;