const express = require('express');
const bodyParser = require('body-parser');
const { nanoid } =  require('nanoid');
const data = require('./data');
const app = express();
const port = 3000;

app.use(bodyParser.json()) // for parsing application/json

app.get("/students",(req,res) => {
    if(req.headers.authorization !== "123"){
        res.sendStatus(401)
    }
    res.json(data.map((d) => {
        return {
            name: d.name,
            id: d.id
        }
    }));
});

app.get("/students/search",(req,res) => {
    const query = req.query;
    console.log(query)
    const results = data.filter((s) =>  s.name.toLowerCase().includes(query.name.toLowerCase()))
    res.send(results)
})

app.get("/students/:studentId",(req,res)=> {
    let studentId = req.params.studentId;
    let student = data.find(s => s.id === studentId) 
    res.json(student)
})

app.post("/students/new",(req,res) => {
    let newStudent = {id: nanoid() , ...req.body};
    data.push(newStudent);
    res.json(newStudent);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});