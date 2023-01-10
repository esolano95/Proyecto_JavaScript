alert("Hola, bienvenido a Grace Foods! \n\nSomos una empresa familiar dedicada a la distribución de carnes hasta la puerta de su casa.");
let nombre = prompt("Ingrese su nombre, por favor!")

while(nombre == ""){
    nombre = prompt("Lo sentimos, vuelva a ingresar su nombre, por favor!")
}
alert("Gracias por comunicarse con nosotros " + nombre + ".")

alert("Actualmente contamos con una gran variedad de cortes de carne de Res y de Pollo. \n\nPor favor, escoja el tipo de carne de su gusto (Res o Pollo).");
let tipoCarne = "";
let producto = 0;
let cantidad =0;

while(tipoCarne != 1 || tipoCarne != 2){
    let tipoCarne = parseInt(prompt("1. Res \n2. Pollo"));

    if(tipoCarne == 1){
        alert("Menú de carnes de Res 👇🏻 \n\nPor favor, seleccione un número válido! \n1. Bistec \n2. Costilla \n3. Carne Molida \n4. Mano de Piedra \n5. Carne para Mechar");
        let producto = parseInt(prompt("Ingrese el número de su producto."))
        
        while(producto <= 0 && producto <= 6){
        producto = parseInt(prompt("Incorrecto! Ingrese un número de producto válido."))
        }

        let costo = 0;
        switch(producto){
            case 1:
                costo = 200;
                alert("El bistec tiene un costo de ¢" + costo + " por unidad.");

                    let cantidad = parseInt(prompt("¿Cuántas unidades desea?"))
                    alert("Usted ha escogido " + cantidad + " unidades.")
                break;
            case 2:
                costo = 250
                alert("La costilla tiene un costo de ¢" + costo + " por unidad.");
                break;
            case 3:
                costo = 300
                alert("La carne molida tiene un costo de ¢" + costo + " por unidad.");
                break;
            case 4:
                costo = 350
                alert("La mano de piedra tiene un costo de ¢" + costo + " por unidad.");
                break;
            case 5:
                costo = 400
                alert("La carne para mechar tiene un costo de ¢" + costo + " por unidad.");
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

        let costo = 0;
        switch(producto){
            case 1:
            costo = 300;
            alert("La pechuga deshuesada tiene un costo de ¢" + costo + " por unidad.");
                break;
            case 2:
                costo = 350
                alert("El filete tiene un costo de ¢" + costo + " por unidad.");
                break;
            case 3:
                costo = 400
                alert("El muslo tiene un costo de ¢" + costo + " por unidad.");
                break;
            case 4:
                costo = 450
                alert("La pechuga tiene un costo de ¢" + costo + " por unidad.");
                break;
            case 5:
                costo = 500
                alert("Los trozos de pechuga tienen un costo de ¢" + costo + " por unidad.");
                break;
            case 6:
                costo = 550
                alert("Las alas tienen un costo de ¢" + costo + " por unidad.");
                break;
            default:
                alert("Número de producto es inválido.")
        }
    }else{
        alert("Lo sentimos, la opción escogida NO es válida. Vuelva a intentarlo!")
    }
}


const iva = 0.13;

function operacion(){
    let suma = producto * cantidad + iva;
    alert("Le recordamos que el costo de nuestros productos NO incluyen el IVA (13%). \n\nPor lo tanto, el costo de su producto por la cantidad de unidades escogida ("+cantidad+") es de "+suma+".")
}