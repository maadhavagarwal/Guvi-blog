exports.handleUserLogin=function(req,res){
    return res.render(login)
}
exports.handleUserSignup=function(req,res){
    //return res.render(login)
    const {fullname,email,password}=req.body;
}