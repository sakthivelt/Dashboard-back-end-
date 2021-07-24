console.clear();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const router=express.Router();
const morgan=require('morgan')

//MiddleWare
app.use(morgan('dev'));
app.use(express.json());
//Router
const infoRouter=require('./router')
app.use('/',infoRouter)


//listen port
app.listen('5000',()=>{
    console.log('server starten ')
})


//Db connetion
mongoose.connect('mongodb://localhost/Dashboard',{ useNewUrlParser: true, useUnifiedTopology: true },(error)=>{
    if(!error) console.log('db connected !!')
})