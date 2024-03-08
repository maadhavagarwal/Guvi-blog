const express= require('express');
const router=express.Router();
//get
router.get(':/Id', function(req,res){
    res.end("Router is under constution");

});
module.exports=router;
