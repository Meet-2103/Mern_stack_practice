const express=require('express')
const path=require('path')
const app=express()
const port=3000


// const happyMiddleware=(req,res,next)=>{
//     console.log(req)
//     next()
// }

// app.use(express.static(path.join(__dirname,"public")))
// app.use(happyMiddleware)

app.get('/',(req,res)=>{
    res.send('Hello world Meet!')
})

// app.get('/about/:name',(req,res)=>{
//     res.send('Hello World'+req.params.name)
// })

// app.get('/about',(req,res)=>{
//     //res.sendFile(path.join(__dirname,'index.html'))
//     res.json({"Meet":33})
// })

app.listen(port,()=>{
    console.log('Example app listening at http://localhost:${port}')
})