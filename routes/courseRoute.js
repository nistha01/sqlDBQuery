const express=require('express');
const courseController=require('../controller/courseController')
const router=express.Router();



router.post('/add',courseController.addCourses);
router.post('/addStudentsToCourses',courseController.addStudentsToCourses);


module.exports=router;