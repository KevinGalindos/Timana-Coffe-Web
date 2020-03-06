const pool = require('../database/database');
const modelo = {};


modelo.cargaradmin = async (req, res) => {
    let usuar = req.body.user;
    let contra = req.body.pass;
    pool.query('SELECT  * FROM usuario where contrasena =? and usuario.nom_user=?;', [contra, usuar], async (err, resul) => {
        if (err) {
            console.log(err);
            res.render('iniciar.html');
        } else {

            if (resul.length > 0) {
                res.render('admi.html')
            } else {

                res.render('iniciar.html')
            }
        }
    });
}

modelo.insertarusuario = async (req, res) => {
    let newusuario = {
        idusuario: req.body.identi,
        nombre_usu: req.body.nombre,
        correo_usu: req.body.email,
        nom_user: req.body.username,
        contrasena: req.body.pass,
        r_contra: req.body.rpass
    }
    pool.query("insert into usuario set ?", [newusuario], (err, resul) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/usuario');
    })
}

modelo.lista = async (req, res) => {
    let listausuario = await pool.query("select idusuario,nombre_usu,correo_usu,nom_user from usuario");
    res.render('lisusuario.html', {
        listausuario
    })
}

modelo.eliminarusu = async (req, res) => {
    const usuario = req.params.idusuario;
    console.log(usuario)
    pool.query('delete from usuario where idusuario =?', [usuario], (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.log('entro')
        res.redirect('/lis')
    });
    ;
}
let obj = {
    nombre: '',
    ingrediente: '',
    procedimiento: '',
    descripcion: ''
}
let option={
    rta:'/addproducto',
    namebutton:'Registrar Producto'
}
modelo.insertarproducto = async (req, res) => {

    let newproducto = {
        nombre_producto: req.body.nombre,
        ingredientes_productos: req.body.ingredientes,
        procedimiento_producto: req.body.procedimiento,
        descripcion_producto: req.body.descripcion
    }
    pool.query("insert into producto set ?", [newproducto], (err, resul) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/produc');
    })
}

modelo.gesproducto = async (req, res) => {
    let listaproducto = await pool.query("select*from producto");
    res.render('producto.html', {
        listaproducto, obj,option
    })
    obj = {
        nombre: '',
        ingrediente: '',
        procedimiento: '',
        descripcion: ''
    }
    option={
        rta:'/addproducto',
        namebutton:'Registrar Producto'
    }
}


modelo.eliminar = async (req, res) => {
    const producto = req.params.idproducto;
    pool.query('delete from producto where idproducto =?', [producto], (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.log('entro')
        res.redirect('/produc')
    });
    ;
}

modelo.buscar = async (req, res) => {
    let listaproducto = await pool.query("select*from producto");
    const producto = req.params.idproducto;
    console.log(producto)
    pool.query('select * from producto where idproducto =?', [producto], (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.log('entro')
        obj = {
            nombre: rows[0].nombre_producto,
            ingrediente: rows[0].ingredientes_productos,
            procedimiento: rows[0].procedimiento_producto,
            descripcion: rows[0].descripcion_producto
        }
        option={
            rta:'/addproducto',
            namebutton:'Registrar Producto'
        }
        res.redirect('/produc');
    

    });
    ;
}
modelo.edit = async (req, res) => {
    let listaproducto = await pool.query("select*from producto");
    const producto = req.body.idproducto;
    let nom=req.body.nombre_producto;
    let ing=req.body.ingredientes_productos;
    let pro=req.body.procedimiento_producto;
    let des=req.body.descripcion_producto;
    console.log(producto)
    pool.query('update producto set nombre_producto=? , ingredientes_productos=? , procedimiento_producto=? , descripcion_producto=?  where idproducto =?', 
    [nombre_producto,ingredientes_productos,procedimiento_producto,descripcion_producto,producto], (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.log('entro')
        obj = {
            nombre: rows[0].nombre_producto,
            ingrediente: rows[0].ingredientes_productos,
            procedimiento: rows[0].procedimiento_producto,
            descripcion: rows[0].descripcion_producto
        }
        option={
            rta:'/addproducto',
            namebutton:'registrar Producto'
        }
        res.redirect('/produc');
    

    });
    ;
}

module.exports = modelo;