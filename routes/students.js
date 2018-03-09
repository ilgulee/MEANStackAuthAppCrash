const express = require('express');
const router=express.Router();
const passport = require('passport');
const jwt=require('jsonwebtoken');

const Student=require('../models/Student')


//Register  we don't need to do /users/register : reduce typing code.
router.post('/register', (req, res,next) => {
    let newStudent=new Student({
        studentId:req.body.studentId,
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        address:req.body.address,
        city:req.body.city,
        phone:req.body.phone,
        program:req.body.program,
        date:req.body.date,
        password:req.body.password
    });

    Student.addStudent(newStudent,(err,student)=>{
        if(err){
            res.json({success:false,msg:'failed to register student'});
        }else{
             res.json({success:true,msg:'student registered'});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res,next) => {
    res.send('authenticate');
});

//Profile
router.get('/profile', (req, res,next) => {
    res.send('profile');
});

module.exports=router;