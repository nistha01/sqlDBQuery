const express = require('express');
const db = require('./utils/dbConnections');
const studentRoute = require('./routes/studentsRoute');
const { FORCE } = require('sequelize/lib/index-hints');
const app = express();


const studenModel=require('./models/Students')


app.use(express.json())
app.get('/', (req, res) => {
    res.send("hello world");
})


app.use('/students', studentRoute);

db.sync({force:true}).then(() => {
    app.listen(3000, (err) => {
        if (err) {
            console.log("Not able to run the application:", err);
            return;
        }
        console.log("Running on port 3000");
    });
}).catch((err) => {
    cjonsole.log(err);

})

