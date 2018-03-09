const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');

//User Schema
const StudentSchema=mongoose.Schema({
    studentId:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    program:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const Student=module.exports=mongoose.model('Student',StudentSchema);

module.exports.getStudentById=function(id,callback){
    Student.findById(id,callback);
}

module.exports.getStudentByStudentId=function(studentId,callback){
    const query={studentId:studentId}
    Student.findOne(query,callback);
}

module.exports.addStudent=function(newStudent,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newStudent.password,salt,(err,hash)=>{
            if(err) throw err;
            newStudent.password=hash;
            newStudent.save(callback);
        });
    });
}