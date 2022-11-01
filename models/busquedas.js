const axios = require('axios');


class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

    constructor() {
        //TODO: leer DB si existe
    }


    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
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
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],



            }))
            

        } catch (error) {

            return [];

        }


    }


}


module.exports = Busquedas;