const axios = require('axios');


class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

    constructor() {
        //TODO: leer DB si existe
    }
    async ciudad(lugar = '') {
        try {

            // peticion http
            //console.log('ciudad', lugar); 

            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/poza%20rica%20.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoiYXJvc3RlZ3VpbWFyYW50byIsImEiOiJjbDlvbHRibjUwMnU1NDBwbXIzYml2NDNzIn0.q-ozXy3Ppd2TbRMlpWJUCA')
            console.log(resp.data);

            return []

        } catch (error) {

            return [];

        }


    }


}


module.exports = Busquedas;