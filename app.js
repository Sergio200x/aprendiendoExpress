 const express = require("express");
 const app = express();
 const path = require('path')
 const port =3030
 app.use(express.static("public"));

 app.get("/home", (res, resp)=> resp.sendFile(path.join(__dirname,"/views/index.html")))

 app.get("/", (res, resp)=> resp.sendFile(path.join(__dirname,"/views/index.html")))

 app.listen(port,()=>{console.log("servidor activo")})






 