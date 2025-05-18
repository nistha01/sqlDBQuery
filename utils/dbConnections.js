const {Sequelize}=require('sequelize')

const sequelize = new Sequelize('testdb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });


  (async()=>{
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();


module.exports=sequelize;

























// const mysql=require('mysql2')

// const connection=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"root",
//     database:"testdb"
// })

// connection.connect((err)=>{
//     if(err){
//         console.log("the error is in db connection",err);
//         return;
//     }
//     console.log("connectin established");

//     const createtableQuery1=`CREATE TABLE IF NOT EXISTS Users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(100) NOT NULL,
//         email VARCHAR(100) UNIQUE NOT NULL
//     )`
//     const query2=`CREATE TABLE IF NOT EXISTS Buses (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     busNumber VARCHAR(20) NOT NULL,
//     totalSeats INT NOT NULL,
//     availableSeats INT NOT NULL
// )`
//  const query3 =`CREATE TABLE IF NOT EXISTS Bookings (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     seatNumber INT NOT NULL
// )`
//     connection.execute(createtableQuery1);
//     connection.execute(query2);
//     connection.execute(query3);
// })

// module.exports={connection}
 
