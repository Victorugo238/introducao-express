const express = require("express");
const app = express();
const port = 3000;

app.get("/",(request, response)=>{
    response.send("VICTOR HUGO É MUITO LINDO");
});
app.get("/contato",(request, response)=>{
    response.send("whats 18 98155-5555");
});
app.post("/teste",(request, response)=>{
    response.send("testando postman")
})

app.listen(port, ()=>{
    console.log("nosso servidor está na porta" + port)
});

