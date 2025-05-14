const express= require('express');
const mysql=require('mysql2')
const app=express();


app.get('/',(req,res)=>{
    res.send("hello world");
})

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"testdb"
})

connection.connect((err)=>{
    if(err){
        console.log("the error is in db connection",err);
        return;
    }
    console.log("connectin established");

    const createtableQuery1=`CREATE TABLE Users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
    )`
    const query2=`CREATE TABLE Buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(20) NOT NULL,
    totalSeats INT NOT NULL,
    availableSeats INT NOT NULL
)`
 const query3 =`CREATE TABLE Bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT NOT NULL
)`
    connection.execute(createtableQuery1);
    connection.execute(query2);
    connection.execute(query3);
})



app.listen(3000, (err) => {
    if (err) {
        console.log("Not able to run the application:", err);
        return;
    }
    console.log("Running on port 3000");
});
