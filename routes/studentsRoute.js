const express= require('express');
const studentController= require('../controller/studentController')
const router=express.Router();


router.post('/addStudents',studentController.addStudents);
//router.put('/update',studentController.updateStudent);
//router.get('/allStudents',studentController.getAllStudents);

module.exports=router;