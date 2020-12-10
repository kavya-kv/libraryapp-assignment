const express= require('express');
const authorsRouter=express.Router();
function router(nav){
    var authors=[
        {
            title:'Charles Dickens',
            
            genre:'Journalist',
            dob:'7-Feb-1812',
            img:"charles.jpg",
        },
        {
            title:'John Milton',
            
            genre:'Civil Servant',
            dob:'9-Dec-1608',
            img:"john.jpg",
        },
        {
            title:'William Shakespeare',
            
            genre:'Dramatist',
            dob:'Apr-1564',
            img:"william.jpg",
        }
    ];
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
    
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
    
        res.render("author",{
            nav,
            title:'Library',
            author:authors[id]
        });
    })
    return authorsRouter;
    
}

module.exports=router;