const axios = require('axios');


class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

    constructor() {
        //TODO: leer DB si existe
    }


    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoiYXJvc3RlZ3VpbWFyYW50byIsImEiOiJjbDlvbHRibjUwMnU1NDBwbXIzYml2NDNzIn0.q-ozXy3Ppd2TbRMlpWJUCA',
            'limit': 5,
            'languaje': 'es'
        }
    }

    async ciudad(lugar = '') {
        try {

            // peticion http

            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/poza%20rica%20${lugar}.json`,
                params: this.paramsMapbox


            });

            const resp = await intance.get();
            console.log(resp.data);

            return []

        } catch (error) {

            return [];

        }


    }


}


module.exports = Busquedas;