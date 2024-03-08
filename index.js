const express= require('express');
const path=require('path')
const mongoose=require("mongoose");

const bodyParser=require('body-parser');
const app=express();
mongoose.connect("mongodb://localhost:27017/GuviBlogs").then(()=>console.log("Mongo Connected"))
.catch((err)=>console.log("mongo not connected"))
const staticRouter=Router=require('./router/staticRouters');
const userRouter=require('./router/userRoutes');
const blogRouter=Router=require('./router/blogRouters');
//congfiguration
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
//routers
app.use("/user",userRouter);
app.use("/blog",blogRouter);
app.use("/",staticRouter);
app.use(express.static(path.resolve("./public")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//mid
app.listen(8000, () => console.log("serverstarterd at port 8000"));
app.use(express.static(path.resolve('./public')));

