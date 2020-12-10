const express= require('express');
const admin1Router=express.Router();

function router(nav){
    admin1Router.get('/',function(req,res){
        res.render('addauthor',{
            nav,
            title:'Library'
        })

    })
    admin1Router.get('/add',function(req,res){
        res.send('author added');
                

    })
    return admin1Router;
}


module.exports=router;