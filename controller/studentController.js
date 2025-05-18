const express = require('express');
const {connection}=require('../utils/dbConnections')
const Student=require('../models/Students')

// const addStudents=(req,res)=>{
//     const {email,name}=req.body;
//     const query='INSERT INTO  Users(email,name) VALUES (?,?)'

//     connection.execute(query,[email,name],(err)=>{
//         if(err){
//             res.status(500).send(err.message);
//             console.log(err);
//             db.connection.end();
//             return;
//         }
//         else{
//             res.status(200).send("Student added successfully");
//             return;
//         }
//     })


// }

// const updateStudent=(req,res)=>{
//     const {email,name}=req.body;
//     const query = 'UPDATE users SET email = ? WHERE name = ?';
//     connection.execute(query,[email,name],(err)=>{
//         if(err){
//             console.log(err);
//             res.status(500).send(err.message);
//             return;
//         }
//         res.status(200).send("Updated successfully");
       
//     })




// }

// const getAllStudents=(req,res)=>{
//     const query='SELECT * FROM users';

//     connection.execute(query,(err,result)=>{
//         if(err){
//             console.log(err);
//             res.status(500).send(err.message);
//             return;
//         }
//         res.status(200).send(result);
//         return;
//     })
// }

const addStudents = async (req, res) => {
    try {
        const { name, email } = req.body;

        await Student.create({ name, email });

        res.status(200).send("Student added successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
};




module.exports={addStudents}

//,updateStudent,getAllStudents