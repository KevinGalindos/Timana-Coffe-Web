
const modeloadmin = require('../models/modeloadmin');
const express = require('express');
const rutas = express.Router();

rutas.get('/', (req, res) => {
    res.render('index.html')
});
rutas.get('/acerca', (req, res) => {
    res.render('about.html');
});
rutas.get('/productos', (req, res) => {
    res.render('products.html');
});
rutas.get('/tienda', (req, res) => {
    res.render('store.html');
});
rutas.get('/iniciar', (req, res) => {
    res.render('iniciar.html');
});

rutas.get('/usuario', (req, res) => {
    res.render('usuario.html');
});
rutas.get('/npro', (req, res) => {
    res.render('crear_producto.html');
});

rutas.post('/admin', modeloadmin.cargaradmin);

rutas.post('/addproducto', modeloadmin.insertarproducto);

rutas.post('/addusuario', modeloadmin.insertarusuario);

rutas.get('/produc', modeloadmin.gesproducto);

rutas.get('/lis', modeloadmin.lista);

rutas.get('/deleusu/:idusuario', modeloadmin.eliminarusu);
rutas.get('/buscar/:idproducto', modeloadmin.buscar);
rutas.get('/edit/:idproducto', modeloadmin.buscar);
rutas.get('/delet/:idproducto', modeloadmin.eliminar);



module.exports = rutas;