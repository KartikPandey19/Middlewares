const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;
const schema = zod.array(zod.number());

function validation(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);

}
app.use(express.json())

app.post("/",(req,res)=>{
    const response = validation(req.body)
    if(!response.success){
        res.json({
            msg:"your inputs are invalid"
        })
        return;
    }
    res
})

app.listen(port);