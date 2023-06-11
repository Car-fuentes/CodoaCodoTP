
let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let resumen = document.getElementById("resumen"); 

formulario.addEventListener("submit", function(x){
    x.preventDefault();
    console.log("funciona");

    let ticket ={
        precio: 200
    }

    let descuento = function(a){
        return this.precio * a /100;
    }

    let tktEstudiante = descuento.call(ticket, 20)
    console.log(tktEstudiante)

    let tktGeneral = descuento.call(ticket, 100)
    console.log(tktGeneral)

    let tktTrainee = descuento.call(ticket, 50)
    console.log(tktTrainee)

    let tktJunior = descuento.call(ticket, 85)
    console.log(tktJunior)

    switch (categoria.value){
        case "estudiante":
            total = parseInt(cantidad.value)*tktEstudiante;
            break;
            case "trainee":
                total = parseInt(cantidad.value)*tktTrainee;
                break;
            case "junior":
                total = parseInt(cantidad.value)*tktJunior;
                break;
            case "general":
                total = parseInt(cantidad.value)*tktGeneral;
                break;
    }
    
        resumen.innerHTML = `El total de tu compra es: ${total}`;

})

