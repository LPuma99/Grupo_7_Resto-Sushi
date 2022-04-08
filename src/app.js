const express = require("express") 
const app = express() 
const path = require("path")
const PORT = 3000

/* Enrutadores */
const indexRouter = require ('./router/indexRouter')
const productRouter = require ('./router/productRouter')
const userRouter = require('./router/userRouter')

/* View config */
app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(express.static(path.join(__dirname, '../public')));

/* app.use(express.static("public"))
app.use("/style", express.static(__dirname + '../public/')) */

app.use('/', indexRouter)
app.use('/productos' , productRouter) /* Lista, detalle de producto */
app.use('/user', userRouter)/* Login, Register */


app.listen(PORT, () => console.log(`Servidor listen port ${PORT}
http://localhost:${PORT }`));
