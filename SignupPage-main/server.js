const express =require('express');
const mysql =require('mysql')
const cors =require('cors')

const app=express()
app.use(cors())

app.get('/',(re,res)=>{
    return res.json("From BackEns Side");
})

const db=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'cse'
})

app.listen(8081,()=>{
    console.log("listening");
})

app.get('/annama1',(req,res)=>{
    const sql= "select * from annama1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data);
    })
})