const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
        return new Promise((resolve, reject) => {
            if (!(Number(base) && Number(limite))) {
                reject(`Los valores para Base = ${base} y limite = ${limite} no son numeros`);
                return;
            }
            if (!Number(base)) {
                reject(`El valor introducido para base = ${base} no es un numero`);
                return;
            }
            if (!Number(limite)) {
                reject(`El valor introducido para limite = ${limite} no es un numero`);
                return;
            }
            let data = '';

            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base*i}\n`;
            }

            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`tabla-${base}.txt`)
            });
        })
    }
    // Definimos limite con valor 10 para que quede como valor por defecto
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!(Number(base) && Number(limite))) {
            reject(`Los valores para base = ${base} y limite = ${limite} no son numeros`);
            return;
        }
        if (!Number(base)) {
            reject(`El valor introducido para base = ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido para limite = ${limite} no es un numero`);
            return;
        }
        let data = '';
        // Aqui uso la libreria colors para decorar
        console.log('==========================='.green);
        console.log(`=======Tabla del ${base}=========`.green);
        console.log('==========================='.green);

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        resolve(data);
    });
}


// El objeto Modulo funciona como una clase estatica ya que es accedible desde toda la aplicacion y es util para pasar valores

module.exports = {
    crearArchivo,
    listarTabla
}