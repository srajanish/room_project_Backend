var mongoose = require('mongoose');

const CookSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    date: {
        type: Date,
        required: true,
    },
    email:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
})


const WaterSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    date: {
        type: Date,
        required: true,
    },
    email:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
})



const GrabageSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    date: {
        type: Date,
        required: true,
    },
    email:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
})





module.exports ={
            CookingTask : mongoose.model('cookingtask', CookSchema),
            WaterTask:mongoose.model('watertask', WaterSchema),
            GrabageTask: mongoose.model('garbagetask', GrabageSchema)       
        }

