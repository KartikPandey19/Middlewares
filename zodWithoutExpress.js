const zod = require("zod");

function validation(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);

}

validation({
    email:"xyz@gmail.com",
    password:"ccffffcsdfdg"
});