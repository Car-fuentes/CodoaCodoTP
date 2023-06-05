const formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var cantidad = document.getElementById("cantidad");
var categoria = document.getElementById("categoria").value;



var categ = categoria;
    console.log(categ);

/*var valorTicket = 200;

    if (categ == 1){
    alert("estudiante");
    function tktEstuadiante(){
        var valorTicket =200
        function descuento80(){
        valorTicket =0.20
        console.log(valorTicket)
        }
    return descuento80;
    }} 
*/
    var ticket ={
        precio: 200
    }

    var descuento = function(a){
        return this.precio * a /100;
    }

    var tktEstudiante = descuento.call(ticket, 20)
    console.log(tktEstudiante)

    var tktGeneral = descuento.call(ticket, 100)
    console.log(tktGeneral)

    var tktTrainee = descuento.call(ticket, 50)
    console.log(tktTrainee)

    var tktJunior = descuento.call(ticket, 85)
    console.log(tktJunior)

    /*function tktEstudiante(){
        var valorTicket = 200
        function descuento80(){
        valorTicket *= 0.20 
        console.log(valorTicket)   
        }
        return descuento80;
    }*/

 /*  var precioEstudiante = tktEstudiante();
    precioEstudiante();

var valorTicket = 200

function tktGeneral(){
    function sinDescuento(){
    valorTicket = valorTicket 
    console.log(valorTicket)
    }
    return sinDescuento;
}
var precioGeneral = tktGeneral();
precioGeneral();

    function tktEstudiante(){
        var valorTicket = 200
        function descuento80(){
        valorTicket *= 0.20 
        console.log(valorTicket)   
        }
        return descuento80;
    }

    var precioEstudiante = tktEstudiante();
    precioEstudiante();






/*if (categoria.value == 1){
    console.log("estudiante");
    function haceFuncion(){
        var valorTicket = 200;
        console.log(valorTicket);
        function haceCuenta(){
        valorTicket*200/100
        }
    return haceCuenta;
    }}


/*if (categoria.value == 1){
    console.log("estudiante");
    function haceFuncion(){
        var valorTicket = 200;
        console.log(valorTicket);
        function haceCuenta(){
        valorTicket*200/100
        }
    return haceCuenta;
    }}

var miCuenta = haceCuenta();
miCuenta();*/



formulario.addEventListener("submit", (x)=>{
    x.preventDefault();
    console.log("funciona");


    console.log(apellido.value);
    console.log(nombre.value);
    console.log(email.value);
    console.log(cantidad.value);
    console.log(categoria);

    console.log(typeof apellido.value);
    console.log(typeof nombre.value);
    console.log(typeof email.value);
    console.log(typeof cantidad.value);
    console.log(typeof categoria);
    console.log(typeof +categoria);
})

function suma(cant, cat){
    console.log(1)
    let sumando = cant + cat
    return sumando
}

        



function suma(cantidad, miCuenta){
    let cant = cantidad
    console.log(cant)
    let cuenta = miCuenta
    console.log(cuenta)
    let sumando = cant + cuenta
    return sumando
}