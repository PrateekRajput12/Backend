const express=require('express')
// console.log(express);
const app=express()



app.get("/",(req,res)=>{
    const text={
        name:"John doe",
        age:12,
        job:"Devloe[er"
    }
    res.json(text)
    res.send("Hlo Ji Ky hall hain")
})

app.listen(3000,()=>{
    console.log("server runnign");
})