const mongoose=require('mongoose');

const infoSchema=mongoose.Schema({
    Region:{
        type:String,
        required:true,
    },
    Circle:{
        type:String,
        required:true,
    },
    Division:{
        type:String,
        required:true,
    },
    SubDivision:{
        type:String,
        required:true,
    },
    PumpStation:{
        type:String,
        required:true,
    },
    ControllarUid:{
        type:String,
        required:true,
    },
    DevicesStatus:{
        type:String,
        default:'offline'
    },
    PumpStatus:{
        type:String,
        default:'off'
    },
    CreateTime:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Info",infoSchema)