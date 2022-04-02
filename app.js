const express = require("express") 
const app = express() 
const path = require("path")
const PORT = 3000

app.use(express.static("public"))
app.use("/public", express.static(__dirname + '/public'))


app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "/views/index.html"))

})
app.get("/login", function(req,res) {
    res.sendFile(path.join(__dirname, "/views/login.html"))

})
app.get("/registro", function(req,res) {
    res.sendFile(path.join(__dirname, "/views/registro.html"))

})
app.get("/producto", function(req,res) {
    res.sendFile(path.join(__dirname, "/views/productDetail.html"))

})
app.get("/carrito", function(req,res) {
    res.sendFile(path.join(__dirname, "/views/carrito-compra.html"))

})


app.listen(PORT, () => console.log(`Servidor listen port ${PORT}
http://localhost:${PORT}`));
