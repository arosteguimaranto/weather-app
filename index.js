require('dotenv').config()


const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

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
             const luagrSel = lugares.find(l => l.id === id);
             console.log(luagrSel);
             //console.log({id});


      
             //Buscar los lugares

             // Seleccionar el lugar

             //Clima

             //Mostrar resultados

             console.log('\nInformacion de la ciudad\n'.rainbow);
             console.log('Ciudad:', luagrSel.nombre );  
             console.log('Lat:', luagrSel.lat );
             console.log('Lng:', luagrSel.lng );
             console.log('Temperatura:', );
             console.log('Minima:', );
             console.log('Maxima:', );


                break;




        }

        console.log({ opt });

        if (opt !== 0) await pausa();

    } while (opt !== 0)

    //Muestra el menu



    //ciclo
    // crear la opcion
    // menu como lo trabajamos en la seccion anterior
    // aparezca menu y opciones, se limpie la consola
    // pausa para que cuando se oprima enter se recargue la seccion




    console.log(texto);
}


main();