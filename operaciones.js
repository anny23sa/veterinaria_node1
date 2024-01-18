const fs = require('fs')


const registrar = (nombre_animal, edad, tipo_animal, color, enfermedad) => {
    const lista = JSON.parse(fs.readFileSync("citas.json",'utf-8'))

    lista.push({nombre_animal, edad, tipo_animal, color, enfermedad})
    fs.writeFileSync("citas.json",JSON.stringify(lista))

    console.log('Registrado: '+ nombre_animal + ', ' + edad + ', ' + tipo_animal + ', ' + color + ', ' + enfermedad);
}

const leer = () => {
    const lista = JSON.parse(fs.readFileSync("citas.json",'utf-8'))
    if(lista.length === 0){
        console.log("No hay citas")
    }
    else {
        lista.forEach(function (elemento, index, array) {
            console.log("Cita " + (index+1) + ': ');
            console.log(" - Nombre: " + elemento.nombre_animal);
            console.log(" - Edad: " + elemento.edad);
            console.log(" - Tipo: " + elemento.tipo_animal);
            console.log(" - Color: " + elemento.color);
            console.log(" - Enfermedad: " + elemento.enfermedad);
        });
    }
    return lista
}

const vaciarTodo = () => {
    fs.writeFileSync("citas.json",'[]')
}


module.exports = {registrar,leer,vaciarTodo}

