const express = require('express')
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    var a =1,b=2
    var c = a+ b;
    res.send("hello world!!!!");
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})