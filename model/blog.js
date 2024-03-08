const mongoose= require('moongoose');
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    cover:{
        type:String,
        required:false,

    },



});
const Blog=mongoose.model("Blog", blogSchema);
module.exports=Blog;