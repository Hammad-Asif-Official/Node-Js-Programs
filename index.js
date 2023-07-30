const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const server = express();

server.use((req,res,next)=>{
    console.log(req.get('User-Agent'), new Date(), req.method,req.ip,req.hostname)
    next()
}
)


const auth=server.use((req,res,next)=>{
    console.log(req.query)
    if(req.query.password=="123"){
        next()
    }else{
         res.sendStatus(401);
    }
}
)



// API-Endpoint-Route

server.get("/", (req, res) => {
  res.json({ type: "Get" });
});
server.post("/", (req, res) => {
  res.json({ type: "Post" });
});

server.delete("/", (req, res) => {
  res.json({ type: "Delete" });
});
server.put("/", (req, res) => {
  res.json({ type: "Put" });
});
server.patch("/", (req, res) => {
  res.json({ type: "Patch" });
});

server.get("demo", (req, res) => {
  // res.send('helloo')
  // res.sendFile('D:\Node.Js\Starting\index.html')
  // res.json(products)
  // res.sendStatus(404)
});

server.listen(8080, () => {
  console.log("server started");
});
