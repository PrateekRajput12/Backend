const express =require('express')

const app=express()

const port=2000

app.listen(port,()=>{
    console.log("app is running");
})

// app.use((req,res)=>{
//     // res.send("hogaya bhai")
//     res.send({
//         name:"kaju",
//         naam:"baju"
//     })
//     console.log("receiving requests");
// })
app.get('',(req,res)=>{
    // res.send("hogaya bhai")
    res.send({
        name:"kaju",
        naam:"baju"
    })
    console.log("receiving requests");
    console.log("kya haal hain");
})


app.get('/naam',(req,res)=>{
    // res.send("hogaya bhai")
    res.send({
        name:"jjj",
        naam:"aaa"
    })
    console.log("receiving requests");
})