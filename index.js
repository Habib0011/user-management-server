const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id:'1', name:'Rakib', email:'rakib@gmail.com' },
    {id:'2', name:'Sakib', email:'sakib@gmail.com' },
    {id:'3', name:'Wakib', email:'wakib@gmail.com' },
]

app.get('/', (req,res)=>{
    res.send("user management server is running")
})
app.get('/users', (req,res) =>{
    res.send(users)
})

app.listen(port, ()=>{
    console.log(`server is running on port : ${port}`)
})