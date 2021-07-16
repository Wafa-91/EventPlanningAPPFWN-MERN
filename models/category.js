const mongoose=require("mongoose");
const schema=mongoose.Schema;
const categorySchema=new schema({
    typeCategory:{
        type:String,
        required:true
    },
    decription:{
        type:String,
     
    },
   
});


module.exports=mongoose.model("category",categorySchema)