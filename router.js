const { response } = require('express');
const express =require('express');
const router=express.Router();
const InfoSchema=require('./infoSchema')

router.get('/',(req,res)=>{
    res.json('i am form router file')
})

router.get('/Dash',(req,res)=>{
    res.json('i am form Dash')
})


//create
router.post('/Create',async(req,res)=>{
    console.log(req.body);
    var data=new InfoSchema({
        Region:req.body.Region,
        Circle:req.body.Circle,
        Division:req.body.Division,
        SubDivision:req.body.SubDivision,
        PumpStation:req.body.PumpStation,
        ControllarUid:req.body.ControllarUid,
        DevicesStatus:req.body.DevicesStatus,
        PumpStatus:req.body.PumpStatus,
        CreateTime:req.body.CreateTime
    })  
    await data.save();
    res.send(data)
})

//get
router.get('/list',async(req,res)=>{
    var findData= await InfoSchema.find();
    res.json(findData);
    res.json('this is list view');
})

//Update
router.put('/Update',async(req,res)=>{
    var update= await InfoSchema.update({_id:req.body._id},{$set:{
        Region:req.body.Region,
        Circle:req.body.Circle,
        Division:req.body.Division,
        SubDivision:req.body.SubDivision,
        PumpStation:req.body.PumpStation,
        ControllarUid:req.body.ControllarUid,
        DevicesStatus:req.body.DevicesStatus,
        PumpStatus:req.body.PumpStatus,
        CreateTime:req.body.CreateTime
    }});
    res.json(update);
})

//Delete
router.delete("/delete/:id",async(req,res)=>{
    var delData= await InfoSchema.findByIdAndRemove(req.params.id);
    res.json({message:'deleted successfully !'});
});

module.exports=router;