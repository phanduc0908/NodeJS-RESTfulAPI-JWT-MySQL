const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
const router = require('./routes/Movies');

app.use(router);

app.listen(PORT, ()=>{
    console.log("Server is running on port 3000");
})