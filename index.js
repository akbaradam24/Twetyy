const express = require('express');
require('dotenv').config();
const app = express();
const routers = require('./routes/routes');
const port = process.env.PORT || 3000


app.use('/', routers)

app.listen(port, () => {
    console.log(`running live and well at port ${port}`)
})