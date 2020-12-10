const express= require('express');
const booksRouter=express.Router();
function router(nav){
    var books=[
        {
            title:'A tale of two cities',
            author:'Charles Dickens',
            genre:'Novel',
            img:"tale.jpg",
        },
        {
            title:'The sword of God',
            author:'John Milton',
            genre:'Fantasy',
            img:"sword.jpg",
        },
        {
            title:'Romeo & Juliet',
            author:'William Shakespeare',
            genre:'Tragedy',
            img:"romeo.jpg",
        }
    ];
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
    
        });
    });
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
    
        res.render("book",{
            nav,
            title:'Library',
            book:books[id]
        });
    })
    return booksRouter;
    
}

module.exports=router;