const express = require("express");
const app = express();
const port = 3000;

//middlewares
function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!="xyz" || password!="pass"){
        res.status(403).json({
            msg:"wrong login credentials"
        })
    }else{
        next();
    }
}

function idMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId!=1&&kidneyId!=2){
        res.status(400).json({
            msg:"something is wrong with your inputs"
        })
    }else{
        next();
    }
}

//route
app.get("/",userMiddleware,idMiddleware,(req,res)=>{
    
    res.json({
        msg:"u r kidney is good"
    })
 

});

app.listen(port);