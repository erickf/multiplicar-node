/**
 * Para crear crear el proyecto desde ventana de comandos (posicionados en la carpeta que contiene los archivos base)
 * usamos el comando "npm init" y despues definimos las variables y se crea un nuevo archivo package.json
 * En este archivo se definen todos los paquetes que se usaran en la aplicacion
 */
// Con la libreria yargs podemos declarar comandos (listar) y variables (base y limite) especificando sus cualidades

// const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea un archivo con la tabla de multiplicar segun la abse indicada', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help().argv;

// De esta forma separamos el codigo y exportamos el contenido del archivo yargs.js
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// Despues de instalar un package de colores "npm install colors" lo declaro para poder usarlo
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: ${colors.green(archivo)}`);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log('Comando no reconocido');
}


// Aqui podemos declarar la base de manera simple
// let base = '2';

//  El Objeto Process es una clase estatitca o varible de instancia que puyede ser invocada desde cualquier lado de la aplicacion
//console.log(process.argv);
// let argv2 = process.argv;
// let parametro = argv2[2];
// let base = parametro.split('=')[1];

// console.log(argv);

// Con el codigo anterior podemos ingresar parametros desde la consola de la siguiente forma
//
// node app --base=5
//
//Asi ingresamos una variable base y el codigo anterior lo selecciona y extra el valor despues del signo =
//
//Estos comandos son limitados ya que si uno usara otro nombre de variable o usara mas de una varaible el codigo solo va a
//Capturar la primera variable despues del signo igual

// crearArchivo(base)
//     .then(archivo => {
//         console.log(`Archivo creado: ${archivo}`)
//     })
//     .catch(err => {
//         console.log(err);
//     });