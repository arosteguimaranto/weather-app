require('dotenv').config()


const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

//console.log(process.env.MAPBOX_KEY);


const main = async () => {

    const busquedas = new Busquedas();

    let opt = '';


    do {


        opt = await inquirerMenu();
        switch (opt) {
            case 1:
             //Mostrar mensaje
             const termino =  await leerInput('Ciudad: ');

             //Buscar los lugares
             const lugares = await busquedas.ciudad( termino );
             
             //Seleccionar el lugar
             const id = await listarLugares(lugares);
             if( id === '0') continue;

             const luagrSel = lugares.find(l => l.id === id);

             //Guardar en DB
             busquedas.agregarHistorial(luagrSel.nombre);


            
            
             //Clima

             const clima = await busquedas.climalugar(luagrSel.lat, luagrSel.lng);
             
             //Mostrar resultados

             console.clear();
             console.log('\nInformacion de la ciudad\n'.yellow);
             console.log('Ciudad:', luagrSel.nombre.rainbow);  
             console.log('Lat:', luagrSel.lat );
             console.log('Lng:', luagrSel.lng );
             console.log('Temperatura:', clima.temp);
             console.log('Minima:', clima.min );
             console.log('Maxima:', clima.max );
             console.log('Como esta el clima:', clima.desc.rainbow);


                break;

                case 2:
                    busquedas.historialCapitalizado.forEach(( lugar, i) => {
                        const idx = `${ i + 1},`.green;
                        console.log(`${idx} ${lugar}`);
                    })

                    break;

        }

       

        if (opt !== 0) await pausa();

    } while (opt !== 0)

    //Muestra el menu



    //ciclo
    // crear la opcion
    // menu como lo trabajamos en la seccion anterior
    // aparezca menu y opciones, se limpie la consola
    // pausa para que cuando se oprima enter se recargue la seccion




    //console.log(texto);
}


main();