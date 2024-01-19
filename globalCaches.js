const express  = require("express");
const app = express();
const port = 3000;

app.post("/",(req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("your kidney length is "+kidneyLength)
})

//global catches  error handling middleware
app.use((error,req,res,next)=>{
    res.status(500).send('An internal error occurred');

});

app.listen(port);