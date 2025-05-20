const Course=require('../models/courses')
const Student=require('../models/Students')

const addCourses = async(req, res) => {
    try {
        const { name } = req.body;
        const course= await Course.create({'name':name});

        res.status(200).json(course);


    } catch (err) {

        res.status(500).send(err.message)

    }
}

// const addStudentsToCourses=async(req,res)=>{
//     try{
//         const {studentID,courseIDs}=req.body;
//         const student= await Student.findByPk(studentID);
//         const courses= await Course.findAll({
//             where:{
//                 id:courseIDs
//             }
//         })
//         await student.addCourses(courses);
//         const updatedStudent= await Student.findByPk(studentID,{include:Course})
//         res.status(200).json(updatedStudent);

//     }catch(err){
//         res.status(500).send(err.message);

//     }
   
// }
const addStudentsToCourses = async (req, res) => {
    try {
        console.log("Received body:", req.body); // 👈 log here
        const { studentID, courseIDs } = req.body;

        const student = await Student.findByPk(studentID);
        const courses = await Course.findAll({
            where: {
                id: courseIDs
            }
        });
        await student.addCourse(courses);

        const updatedStudent = await Student.findByPk(studentID, { include: Course });
        res.status(200).json(updatedStudent);

    } catch (err) {
        res.status(500).send(err.message);
    }
};


module.exports={addCourses,addStudentsToCourses};