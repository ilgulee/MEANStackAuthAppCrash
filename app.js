const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config=require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
    console.log(`Connected to database ${config.database}`);
});
mongoose.connection.on('error',(err)=>{
    console.log(`Connection error to database ${err}`);
});
const app=express();

const users=require('./routes/users');

const port=3000;

app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/users',users); //'localhost:3000/users' + /xxx , users is router in users.js file

app.get('/', (req, res) => {
    res.send('start point')
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});