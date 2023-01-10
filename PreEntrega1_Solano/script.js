alert("Hola, bienvenido a Grace Foods! \n\nSomos una empresa familiar dedicada a la distribución de carnes hasta la puerta de su casa.");
let nombre = prompt("Ingrese su nombre, por favor!")

while(nombre == ""){
    nombre = prompt("Lo sentimos, vuelva a ingresar su nombre, por favor!")
}
alert("Gracias por comunicarse con nosotros " + nombre + ". 😁")

let producto = 0;
let costo = 0;
let canti = 0;
const iva = 0.13;
let salir = 1;

while(salir == 1){
    let tipoCarne = parseInt(prompt("Actualmente contamos con una gran variedad de cortes de carne de Res y de Pollo. \nPor favor, escoja el tipo de carne que desea comprar (1 o 2). \n\n1. Res \n2. Pollo"));

    if(tipoCarne == 1){
        alert("Menú de carnes de Res 👇🏻 \n\nPor favor, seleccione un número válido! \n1. Bistec \n2. Costilla \n3. Carne Molida \n4. Mano de Piedra \n5. Carne para Mechar");
        let producto = parseInt(prompt("Ingrese el número de su producto."))
        
        while(producto <= 0 && producto <= 6){
        producto = parseInt(prompt("Incorrecto! Ingrese un número de producto válido."))
        }

        switch(producto){
            case 1:
                costo = 200;
                alert("El bistec tiene un costo de ¢" + costo + " por unidad.");
                cantidad();
                operacion();
                break;
            case 2:
                costo = 250
                alert("La costilla tiene un costo de ¢" + costo + " por unidad.");
                cantidad();
                break;
            case 3:
                costo = 300
                alert("La carne molida tiene un costo de ¢" + costo + " por unidad.");
                cantidad();
                break;
            case 4:
                costo = 350
                alert("La mano de piedra tiene un costo de ¢" + costo + " por unidad.");
                cantidad();
                break;
            case 5:
                costo = 400
                alert("La carne para mechar tiene un costo de ¢" + costo + " por unidad.");
                cantidad();
                break;
            default:
                alert("Número de producto es inválido.")
                break;
        }
    }
    else if(tipoCarne == 2){
        alert("Menú de carnes de Pollo 👇🏻 \n\nPor favor, seleccione un número válido! \n1. Pechuga Deshuesada \n2. Filete \n3. Muslo \n4. Pechuga \n5. Trozos de Pechuga \n6. Alas");
        let producto = parseInt(prompt("Ingrese el número de su producto"))
        
        while(producto <= 0 && producto <= 7){
        producto = parseInt(prompt("Incorrecto! Ingrese un número de producto válido"))
        }

        switch(producto){
            case 1:
            costo = 300;
                alert("La pechuga deshuesada tiene un costo de ¢" + costo + " por unidad.");
                cantidad();
                break;
            case 2:
                costo = 350
                alert("El filete tiene un costo de ¢" + costo + " por unidad.");
                cantidad();
                break;
            case 3:
                costo = 400
                alert("El muslo tiene un costo de ¢" + costo + " por unidad.");
                cantidad();
                break;
            case 4:
                costo = 450
                alert("La pechuga tiene un costo de ¢" + costo + " por unidad.");
                cantidad();
                break;
            case 5:
                costo = 500
                alert("Los trozos de pechuga tienen un costo de ¢" + costo + " por unidad.");
                cantidad();
                break;
            case 6:
                costo = 550
                alert("Las alas tienen un costo de ¢" + costo + " por unidad.");
                cantidad();
                break;
            default:
                alert("Número de producto es inválido.")
        }
    }else{
        alert("Lo sentimos, la opción escogida NO es válida. Vuelva a intentarlo!")
    }
    salir = prompt("Gracias por comprar con nosotros " + nombre + "! 😉" + "\n\n¿Desea hacer otra compra? \n1. Sí \n2. No")
}

function cantidad(){
    let canti = parseInt(prompt("¿Cuántas unidades desea?"))
    alert("Usted ha escogido " + canti + " unidades. \n\nTome en cuenta que el costo de nuestros productos NO incluyen el IVA (13%).")
}

function operacion(){
let subTotal = costo * canti;
let total = costo * canti + iva
    alert("Costo producto: ¢" + costo + " \nCosto producto por cantidad: ¢" + subTotal + " \nCosto total con IVA: ¢" + total);
}