let task=require('../model/taskModel');
let moment=require('moment');
const createCookingTask=(req,res)=>{

    let cookingTask=new task.CookingTask({...req.body})
    cookingTask.save().then(result=>{
        console.log(res);
        res.json({msg:"Task is created"})
    },err=>{
        console.log(err);
    })

}


const createWaterTask=(req,res)=>{

  let waterTask=new task.WaterTask({...req.body})
  waterTask.save().then(result=>{
       console.log(res);
       res.json({msg:"Task is created"})
   },err=>{
       console.log(err);
   })

}


const createGarbageTask=(req,res)=>{

 let garbageTask=new task.GrabageTask({...req.body})
 garbageTask.save().then(result=>{
      console.log(res);
      res.json({msg:"Task is created"})
  },err=>{
      console.log(err);
  })

}





exports.createTask=(req,res)=>{
    // console.log(req.body)
    // console.log(req.params.type)

    req.body.date= new Date(moment(req.body.date).format("YYYY-MM-DD"));

    switch(req.params.type){
        case 'cook':
                createCookingTask(req,res);
            break;
        case 'water':
            createWaterTask(req,res);
            break;
        case 'garbage':
                createGarbageTask(req,res);
            break;
    }
}


const getCookingTask=(req,res)=>{

    task.CookingTask.find().then(result=>{
     
        var myDate = new Date(moment("2018-07-04").format("YYYY-MM-DD"));
        console.log(myDate)
        res.json(result)
    },err=>{
        res.json(err);
    })

}

const getWaterTask=(req,res)=>{
    task.WaterTask.find().then(result=>{
        res.json(result)
    },err=>{
        res.json(err);
    })

}

const getGarbageTask=(req,res)=>{
    task.GrabageTask.find().then(result=>{
        res.json(result)
    },err=>{
        res.json(err);
    })

}

exports.getTask=(req,res)=>{
    // console.log(req.body)
    // console.log(req.params.type)

    switch(req.params.type){
        case 'cook':
                getCookingTask(req,res);
            break;
        case 'water':
                getWaterTask(req,res);
            break;
        case 'garbage':
                getGarbageTask(req,res);
            break;
    }
}
