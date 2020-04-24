const argv = require('./config/yargs').argv;
//const colors = require('colors');
const colors2 = require('colors/safe');


//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log(resp))
            .catch(e => console.log(e));
        //console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            //.then(archivo => console.log(`Archivo creado ${archivo.green}`))
            .then(archivo => console.log(`Archivo creado `, colors2.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//let base = '5';
//console.log(module);
//console.log(multiplicar);
//console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv);
//console.log('Limite: ' + argv.limite);
//console.log(argv2);

// let parametro = process.argv[2];
// let base = parametro.split('=')[1];

//console.log(base);