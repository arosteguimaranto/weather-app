const { leerInput,inquirerMenu,pausa } = require("./helpers/inquirer")

const main = async() =>{

    let opt ='';

    do{

       
    opt = await inquirerMenu();
    console.log({opt})

    if(opt !==0)  await pausa();

    } while (opt !== 0)

    //Muestra el menu

/* 
    switch (opt) {
        case 1 :
            console.log('UNO')
            break;

        case 2 :
            console.log('DOS')

            break;

        case 0 : // listar completadas

        console.log('CERO')
            break; */
    //ciclo
    // crear la opcion
    // menu como lo trabajamos en la seccion anterior
    // aparezca menu y opciones, se limpie la consola
    // pausa para que cuando se oprima enter se recargue la seccion


   

    console.log(texto);
}



main();