import express from 'express';
const path=require('path')
import { engine } from 'express-handlebars';

var app=express()

const port=3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname,"static")))
app.use('/',require(path.join(__dirname,'routes/blog.js')))


app.listen(port,()=>{
    console.log('Example app listening at http://localhost:${port}')
})

