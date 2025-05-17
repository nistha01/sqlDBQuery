const express= require('express');
const connection = require('./utils/dbConnections');
const studentRoute=require('./routes/studentsRoute')
const app=express();


app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello world");
})

app.use('/students',studentRoute);



app.listen(3000, (err) => {
    if (err) {
        console.log("Not able to run the application:", err);
        return;
    }
    console.log("Running on port 3000");
});
