const fs = require('fs'); //proyecto propio de node
//const fs = require('express'); //paquete instalado, no nativo de node
//const fs = require('./fs'); //archivos personalizados dentro del proyecto
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        console.log('================'.green);
        console.log(`Tabla de ${base}`.green);
        console.log('================'.green);

        if (!Number(base)) {
            reject(`El valor introducido para base: ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido para limite: ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(data);
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido para base: ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido para limite: ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            //console.log(`El archivo tabla-${base}.txt ha sido creado`);
            resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}