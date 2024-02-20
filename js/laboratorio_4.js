
function generaTabla() {

    // Pedir al usuario que ingrese un número
    let numero = prompt("Ingrese un número:");

    // Convertir la entrada a un número
    numero = parseInt(numero);

    // Verificar si la entrada es un número válido
    if (!isNaN(numero)) {
        // Iniciar la tabla
        //lo que esta en comentaios es porque es lo que pide el lab pero no te lo agrega a tu html si no que lo remplaza
        //A menos que no lo hagas con un buton si no que sea llame cuando se carga el script
        //document.write("<table>");
        let tablaHTML = "<table>";

        //document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
        tablaHTML += "<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";

        // Generar filas de la tabla 
        /*for (let i = 1; i <= numero; i++) {
            document.write(`<tr><td>${i}</td><td>${i * i}</td><td>${i * i * i}</td></tr>`);
        }*/
        for (let i = 0; i <= numero; i++) {
            //para que funcione las mates, se tiene que usar ``(comillas invertidas)
            // y no "" o ''
            tablaHTML += `<tr><td>${i}</td><td>${i * i}</td><td>${i * i * i}</td></tr>`;
        }

        // Cerrar la tabla
        //document.write("</table>");
        tablaHTML += "</table>";

        //Imprimir tabla
        document.getElementById("tablaDeCuadrados").insertAdjacentHTML("afterend", tablaHTML);

    } else {
        // Mostrar mensaje de error si la entrada no es un número
        document.write("Por favor, ingrese un número válido.");
    }
}

function numerosRGN() {

    //floor redondea para abajo y random da un numero entre [0 y 1)
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;


    const resCor = num1 + num2;

    const tiempoIncial = new Date();

    const resUsu = prompt(`Dame la suma de ${num1} + ${num2}`);

    const tiempoFin = new Date();

    //Se divide entre mil, porque el tiempo lo regresa en milisegundos
    const timpoRes = (tiempoFin - tiempoIncial) / 1000;

    if (parseInt(resUsu) == resCor) {
        alert("Correcto! tu tiempo fue de: " + timpoRes + " segundos.");
    } else {
        alert("Lo siento, respuesta incorrecta, te tardaste: " + timpoRes + " segundos.");
    }


}

function contarArreglo() {
    const inputArreglo = document.getElementById("inputconta").value;

    const arreglo = inputArreglo.split(',').map(Number);

    let negativos = 0;
    let ceros = 0;
    let positovos = 0;

    for (let i of arreglo) {
        if (i < 0) {
            negativos++;
        } else if (i > 0) {
            positovos++;
        } else {
            ceros++;
        }
    }

    alert(`menores a cero: ${negativos}\nceros: ${ceros}\nmayores a cero: ${positovos}`);

}

function promediarArreglo() {
    let numFilas = prompt("Ingresa el numero de filas");
    let numColumnas = prompt("Ingresa el numero de columnas");

    const matriz = [];

    for (let i = 0; i < numFilas; i++) {
        const fila = [];
        for (let j = 0; j < numColumnas; j++) {
            const valor = prompt(`Ingrese el valor para la posición (${i + 1}, ${j + 1}):`);
            const numValor = parseFloat(valor);
            fila.push(numValor);
        }
        matriz.push(fila);
    }

    console.log("matriz "+ matriz);

    let respuesta = [];

    for (let i = 0; i < numFilas; i++) {
        let sum = 0;
        for (let j = 0; j < numColumnas; j++) {
            sum += matriz[i][j];
        }
        let promedio = sum/numColumnas;
        respuesta.push(promedio);
    }

    let textR = "<br>";

    for(let i = 0; i < numFilas; i++){
        textR += `promedio ${i +1} = ${respuesta[i]}<br>`
    }

    document.getElementById("media").insertAdjacentHTML("afterend", textR);


}

document.getElementById("tablaDeCuadrados").addEventListener("click", generaTabla);
document.getElementById("sumaBoton").addEventListener("click", numerosRGN);

//forma recomendable

//primer buscamos el elemento de deseao y lo guardamos

const boton_de_invertir = document.getElementById("butoncadena");

boton_de_invertir.addEventListener("click", () => {
    const cadena = document.getElementById("cadena").value;
    const invertida = cadena.split("").reverse().join("");
    document.getElementById("cadena").value = invertida;
});