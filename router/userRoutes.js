const express= require('express');
const router=express.Router();
//get
router.get(':/Id', function(req,res){
    res.end("Router is under constution");

});
//router("/login",exports=router);
router.post('/login',function(req,res){
    console.log(req.body);
    return res.end("ok");
});
router.post('/signup',function(req,res){
    console.log(req.body);
    return res.end("ok");
});

module.exports=router;
