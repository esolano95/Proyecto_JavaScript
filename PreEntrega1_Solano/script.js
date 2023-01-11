alert("Hola, bienvenido a Grace Foods! \n\nSomos una empresa familiar dedicada a la distribución de carnes hasta la puerta de su casa.");

let nombre = "";
while(nombre == ""){
nombre = prompt("Ingrese su nombre, por favor!")
}

alert("Gracias por comunicarse con nosotros " + nombre + ". 😁")

let tipoCarne = 0;
while (tipoCarne === 0) {
    tipoCarne = Number(prompt("Actualmente contamos con una gran variedad de cortes de carne de Res y de Pollo. \nPor favor, escoja el tipo de carne que desea comprar (1 o 2). \n\n1. Res \n2. Pollo"));

    if (tipoCarne === 1) {
        console.log("res");
    } else if (tipoCarne === 2) {
        console.log("pollo");
    } else {
        alert("Opción inválida, inténtalo nuevamente!");
        tipoCarne = 0;
    }
}

function seleccionProducto(tipoCarne) {
    let costo = 0;
    let producto = 0;
    let cantidad = 0;
    let nombreProduct = "";
    
    if (tipoCarne === 1) {
        producto = Number(prompt("Menú de carnes de Res 👇🏻 \n\nPor favor, seleccione un número válido! \n1. Bistec \n2. Costilla \n3. Carne Molida \n4. Mano de Piedra \n5. Carne para Mechar"));
            
        switch (producto) {
            case 1:
                nombreProduct="Bistec";
                costo = 200;
                alert("El bistec tiene un costo de ¢" + costo + " por unidad.");
                cantidad = obtenerCantidad(nombreProduct);
                obtenerTotal(costo, cantidad, nombreProduct);
                break;
            case 2:
                nombreProduct="Costilla";
                costo = 250;
                alert("La costilla tiene un costo de ¢" + costo + " por unidad.");
                cantidad = obtenerCantidad(nombreProduct);
                obtenerTotal(costo, cantidad, nombreProduct);
                break;
            case 3:
                nombreProduct="Carne Molida";
                costo = 300;
                alert("La carne molida tiene un costo de ¢" + costo + " por unidad.");
                cantidad = obtenerCantidad(nombreProduct);
                obtenerTotal(costo, cantidad, nombreProduct);
                break;
            case 4:
                nombreProduct="Mano de Piedra";
                costo = 350;
                alert("La mano de piedra tiene un costo de ¢" + costo + " por unidad.");
                cantidad = obtenerCantidad(nombreProduct);
                obtenerTotal(costo, cantidad, nombreProduct);
                break;
            case 5:
                nombreProduct="Carne para Mechar";
                costo = 400;
                alert("La carne para mechar tiene un costo de ¢" + costo + " por unidad.");
                cantidad = obtenerCantidad(nombreProduct);
                obtenerTotal(costo, cantidad, nombreProduct);
                break;
            default:
                alert("Número de producto es inválido.");
                producto = 0;
        }
    }else if (tipoCarne === 2){
        switch (producto){
            case 1:
                nombreProduct="Pechuga Deshuesada";
                costo = 300;
                alert("La pechuga deshuesada tiene un costo de ¢" + costo + " por unidad.");
                cantidad = obtenerCantidad(nombreProduct);
                obtenerTotal(costo, cantidad, nombreProduct);
                break;
            case 2:
                nombreProduct="Filete";
                costo = 350
                alert("El filete tiene un costo de ¢" + costo + " por unidad.");
                cantidad = obtenerCantidad(nombreProduct);
                obtenerTotal(costo, cantidad, nombreProduct);
                break;
            case 3:
                nombreProduct="Muslo";
                costo = 400
                alert("El muslo tiene un costo de ¢" + costo + " por unidad.");
                cantidad = obtenerCantidad(nombreProduct);
                obtenerTotal(costo, cantidad, nombreProduct);
                break;
            case 4:
                nombreProduct="Pechuga";
                costo = 450
                alert("La pechuga tiene un costo de ¢" + costo + " por unidad.");
                cantidad = obtenerCantidad(nombreProduct);
                obtenerTotal(costo, cantidad, nombreProduct);
                break;
            case 5:
                nombreProduct="Trozos de Pechuga";
                costo = 500
                alert("Los trozos de pechuga tienen un costo de ¢" + costo + " por unidad.");
                cantidad = obtenerCantidad(nombreProduct);
                obtenerTotal(costo, cantidad, nombreProduct);
                break;
            case 6:
                nombreProduct="Alas";
                costo = 550
                alert("Las alas tienen un costo de ¢" + costo + " por unidad.");
                cantidad = obtenerCantidad(nombreProduct);
                obtenerTotal(costo, cantidad, nombreProduct);
                break;
            default:
                alert("Número de producto es inválido.")
                producto = 0;
        }
    }
    alert("Gracias por comprar con nosotros " + nombre +"! 😁👍🏻");
}

function obtenerCantidad(producto) {
    let cant = Number(prompt("¿Cuántas unidades desea?"));
    alert("Usted ha escogido " + cant + " unidades de " + producto + ". \n\nTome en cuenta que el costo de nuestros productos NO incluyen el IVA (13%).");
    return cant;
}

function obtenerTotal(costo, cant, product) {
    const iva = 0.13;
    let subTotal = costo * cant;
    let subTotalNeto = subTotal * iva;
    let total = subTotal + subTotalNeto;
    alert("Costo de " + product + ": ¢" + costo + "\nCosto por cantidad: ¢" + subTotal + " \nCosto total con IVA: ¢" + total);
}

seleccionProducto(tipoCarne);