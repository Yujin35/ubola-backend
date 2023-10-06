const express = require('express');
const app = express();

// dotenv
require('dotenv').config();

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yujin:0505Yujin35@atlascluster.nn3pdn0.mongodb.net/ubola');

mongoose.connection.once('open',()=>{
    console.log('mongoose connection');
});

mongoose.connection.on('error',()=>{
    console.log('mongoose connection field'+error);
});

const userRoute = require('./route/UserRoute');
app.use('/api',userRoute);

app.listen(process.env.PORT,()=>{
    console.log('Server OK real time '+process.env.PORT);
});

