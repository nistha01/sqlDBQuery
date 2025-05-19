const express= require('express');
const studentController= require('../controller/studentController')
const router=express.Router();


router.post('/addStudents',studentController.addStudents);
router.post('/addStudentWithCard',studentController.addValuesToStudentAndIdentityTable);
router.post('/addStudentWithDepartment',studentController.addStudentsWithDepartment);
//router.put('/update',studentController.updateStudent);
//router.get('/allStudents',studentController.getAllStudents);

module.exports=router;