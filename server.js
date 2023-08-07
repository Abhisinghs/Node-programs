const express=require('express');

const app=express();

//convet data to json 
app.use(express.json());


app.use(myMiddleWare);
function myMiddleWare(req,resp,next){
    console.log("Inside the Middle ware i created ");
    next();  //it will pass to the control to next step 
}

/**
 * stich the routes to the server
 */
require('./routes/idea.route')(app);
/**server
 started */
app.listen(8080,()=>console.log('server started'));