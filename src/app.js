const express = require('express');
const app = express();
const path = require('path');
const process = require('process');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieSession = require('./middlewares/cookieSession');

/* Enrutadores */
const indexRouter = require('./router/indexRouter');
const productsRouter = require('./router/productRouter');
const userRouter = require('./router/userRouter');
const adminRouter = require('./router/adminRouter');

/* Middlewares de aplicación */
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

/* session */
app.set('trust proxy', 1);
app.use(session({
    secret:"resto",
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
app.use(cookieParser());
app.use(cookieSession)

/* Views config */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"));

/* Middlewares de Rutas */
app.use('/', indexRouter); // HOME  
app.use('/productos', productsRouter); // Listado, detalle
app.use('/usuarios', userRouter); //Login, registro, perfil
app.use('/admin', adminRouter); // Admin, ABM Productos, ABM Projectos


/* Puerto */
app.listen(PORT, () => console.log(`
Server listen port ${PORT}
http://localhost:${PORT}
`));