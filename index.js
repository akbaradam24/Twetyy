const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000


app.use('/',(req,res,next)=>{
    res.send("hello world") 
})

app.listen(port, () => {
    console.log(`running live and well at port ${port}`)
})