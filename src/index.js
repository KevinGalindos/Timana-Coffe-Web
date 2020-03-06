const express = require('express');
const app = express();
const path = require("path");
const pool=require('./database/database');
//configuracion
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.urlencoded({ extended: false }));

// importar rutas
const routes = require('./rutas/rutas');

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
// rutas

app.use(routes);
// Starting Server
app.listen(app.get('port'), () => {
    console.log(`servidor en linea en puerto: ${app.get('port')}`);
});
