const express= require('express');
const adminRouter=express.Router();

function router(nav){
    adminRouter.get('/',function(req,res){
        res.render('addbook',{
            nav,
            title:'Library'
        })

    })
    adminRouter.get('/add',function(req,res){
        res.send('book added');
                

    })
    return adminRouter;
}


module.exports=router;