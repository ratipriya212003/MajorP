const mongoose=require ('mongoose');

const HelpSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
   
    date:{
        type:Date,
        default:Date.now,
    }
});

module.exports=mongoose.model("helps",HelpSchema);