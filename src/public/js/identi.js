window.addEventListener("load", function () {
    var pathname = window.location.pathname;
    //alert(pathname);

    if(pathname=="/"){
        document.getElementById('menu').innerHTML = "<li class='nav-item active px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/'>INICIO<span class='sr-only'>(current)</span></a></li><li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/acerca'>ACERCA DE</a></li><li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/productos'>PRODUCTOS</a></li><li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/tienda'>TIENDA</a></li><li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/iniciar'>INICIAR SESION</a></li> ";
        
    }
    if(pathname=="/acerca"){
        document.getElementById('menu').innerHTML = "<li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/'>INICIO<span class='sr-only'>(current)</span></a></li><li class='nav-item active px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/acerca'>ACERCA DE</a></li><li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/productos'>PRODUCTOS</a></li><li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/tienda'>TIENDA</a></li><li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/iniciar'>INICIAR SESION</a></li>";
       
    }
    if(pathname=="/productos"){
        document.getElementById('menu').innerHTML = "<li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/'>INICIO<span class='sr-only'>(current)</span></a></li><li class='nav-item  px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/acerca'>ACERCA DE</a></li><li class='nav-item active px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/productos'>PRODUCTOS</a></li><li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/tienda'>TIENDA</a></li><li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/iniciar'>INICIAR SESION</a></li> ";
       
    }
    if(pathname=="/tienda"){
        document.getElementById('menu').innerHTML = "<li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/'>INICIO<span class='sr-only'>(current)</span></a></li><li class='nav-item  px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/acerca'>ACERCA DE</a></li><li class='nav-item  px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/productos'>PRODUCTOS</a></li><li class='nav-item active px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/tienda'>TIENDA</a></li><li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/iniciar'>INICIAR SESION</a></li> ";
       
    }
    if(pathname=="/iniciar"){
        document.getElementById('menu').innerHTML = "<li class='nav-item px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/'>INICIO<span class='sr-only'>(current)</span></a></li><li class='nav-item  px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/acerca'>ACERCA DE</a></li><li class='nav-item  px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/productos'>PRODUCTOS</a></li><li class='nav-item  px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/tienda'>TIENDA</a></li><li class='nav-item active px-lg-4'><a class='nav-link text-uppercase text-expanded' href='/iniciar'>INICIAR SESION</a></li> ";       
    }
    
    
    //terminar el metodo con condiciones 
});