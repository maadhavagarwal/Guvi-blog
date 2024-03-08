const mongoose= require('moongoose');
const userSchema =new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        trype:String,
        required:true,
        default:"Normal",

    },
    profilePicture:{
        type:String,

    },
});
const User = mongoose.model('user', userSchema);
module.exports =User