const express= require('express');

const app=express();
const port =process.env.PORT || 5000;



const nav=[
    {
    link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        
        link:'/admin1',name:'Add Author'
        
    },
    {
        link:'/signup',name:'Sign Up'
    },
    {
        link:'/signin',name:'Sign In'
    },
    


];



const booksRouter=require('./src/routes/bookroutes')(nav);
const authorsRouter=require('./src/routes/authorroutes')(nav);
const signupRouter=require('./src/routes/signuproutes')(nav);
const signinRouter=require('./src/routes/signinroutes')(nav);
const adminRouter=require('./src/routes/adminroutes')(nav);
const admin1Router=require('./src/routes/admin1routes')(nav);



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/signin',signinRouter);
app.use('/admin',adminRouter);
app.use('/admin1',admin1Router);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});


app.listen(port,()=>{console.log("server ready at" +port)});