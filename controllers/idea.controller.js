const ideas = require('../models/idea.model'); // we take the model data in idea variable 

/**
 * search all idea
 */
exports.fetchAllIdeas=(req,res)=>{
    res.status(200).send(ideas);
    //status 200 denotes everything is fine in the code
}


ideaCount=1;
/**
 * create new idea
 */
exports.createIdeas=(req,res)=>{
    // Read the request body
    const idea=req.body;

    //Need to generate new idea id
    idea.id=++ideaCount;

    //save it in the list of existing idea
    ideas[ideaCount]=idea;

    //return the response
    res.status(201).send(ideas);   //status 201 it denotes data send to user
}

/**
 * update idea
 */
exports.updateIdeas= (req,res)=>{
    // I need to read the id passed in the Path
    //127.0.0.1:8080/ideaApp/v1/ideas/1
    const ideaId=req.params.id;

    //If the idea is present - modify else return error
    if(ideas[ideaId]){
        ideas[ideaId]=req.body;
        res.status(200).send(ideas[ideaId]);
    }else{
        res.status(400).send({
            message : "ideas Id passed was not correct"
        })
    }
}

/**
 * Delete idea
 */

exports.deleteIdeas=(req,res)=>{
    // check if present -yes delete, no return error message 

    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        res.status(200).send({
            meassage : "successfully deleted "
        })
    }else{
        res.status(400).send({
            message : "wrong idea id"
        })
    }
}