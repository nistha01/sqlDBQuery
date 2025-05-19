const express = require('express');
const {connection}=require('../utils/dbConnections')
const Student=require('../models/Students');
const { IdentityCard } = require('../models');
const Department= require('../models/department')

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

const addValuesToStudentAndIdentityTable=async(req,res)=>{
    try{
        const student=await Student.create(req.body.students);
        const idCard=await IdentityCard.create({
            ...req.body.IdentityCard,
            StudentId:student.id
        })
        res.status(200).json(student,idCard);

    }catch(err){
        res.status(500).send(err.message);

    }
}

const addStudentsWithDepartment=async(req,res)=>{
   try{
    const {student,department}=req.body;
    let dept= await Department.findOne({where:{name:department.name}});
    
    if(!dept){
        dept= await Department.create({name:department.name})
    }
    const createdStudent=Student.create({
        ...student,
        departmentId:dept.id
    })
    res.status(201).json({
        department:dept,
        student:createdStudent
    })
   }catch(err){
    res.status(500).send(err.message);

   }

}




module.exports={addStudents,addValuesToStudentAndIdentityTable,addStudentsWithDepartment}

//,updateStudent,getAllStudents