const {registrar, leer, vaciarTodo} = require("./operaciones.js")

const argumentos = process.argv.slice(2)

switch (argumentos[0]) {
    case 'registrar':
        if (argumentos.length != 6){
            console.log("Deben ser 5 argumentos adicionales en el caso de registrar.")
        }
        else {
            registrar(argumentos[1],argumentos[2],argumentos[3],argumentos[4],argumentos[5])
        }
        break;
    case 'leer':
        leer()
        break;
    case 'vaciar':
        vaciarTodo()
        break;
    default:
        console.log("Las opciones son 'leer' o 'registrar' o 'vaciar'.")
        break;
}