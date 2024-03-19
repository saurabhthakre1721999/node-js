
const http =require("node:http")
 const port = 8000;
 const Hostname="localhost"
 const msg = "hi server is on"
 const server = http.createServer( ( req ,res)=>{

console.log("response by resoi",req)
res.setHeader("Content-Type" , "application/json")
const paylod = { name:"rahul"}
 res.end(JSON.stringify(paylod))
 })


 server.listen(port,Hostname,()=>{
    console.log({msg})
 });