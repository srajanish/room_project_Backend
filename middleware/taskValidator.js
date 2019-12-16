
var express = require('express');
var router = express.Router();
let task=require('../model/taskModel');


 exports.middleware={

    cookingTaskValidator:(req,res,next)=>{

        task.CookingTask.find({date:req.body.date}).then(res=>{
            console.log(res);
           
        },err=>{
            console.log(err);
        })

    }
}

