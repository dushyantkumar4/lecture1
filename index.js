const express=require("express");
const app=express();
let port =8080;

// app.get("/",(req,res)=>{
//     res.send("sending a get request");
// });
app.get("/",(req,res)=>{
    res.send("get a GET request");
});
app.post("/items",(req,res)=>{
    res.send("got a Post request");
});
app.put("/items/:id",(req,res)=>{
    res.send("get a put request");
});

app.delete("/items/:id",(req,res)=>{
    res.send("get a delete request");
});

app.listen(port, ()=>{
    console.log(`port is listening on ${port}`);
});