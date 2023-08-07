//first we take the controller data 
const ideaController=require('../controllers/idea.controller');


/**
 * define route for the call like 
 * GET 127.0.0.1:8080/ideaApp/v1/ideas
 */

module.exports=(app)=>{
    app.get('/ideaApp/v1/ideas',ideaController.fetchAllIdeas);

    //Post call
    app.post("/ideaApp/v1/ideas",ideaController.createIdeas);

    // Put call 
    app.put("/ideaApp/v1/ideas/:id",ideaController.updateIdeas);

    // Delete call 
    app.delete("/ideaApp/v1/ideas/:id",ideaController.deleteIdeas)
}