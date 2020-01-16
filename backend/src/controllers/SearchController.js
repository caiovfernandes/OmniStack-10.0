const Dev = require('../models/Dev');
const parseStrinToArray = require('../utils/parseStringToArray');


module.exports = {
    async index(req, res){
        const { latitude, longitude, techs} = req.query;
        //Buscar todos os dev em um raio
        //Filtrar por tecnologias
        const techsArray = parseStrinToArray(techs);
        const devs = await Dev.find({
            techs: {
                $in: techsArray  //https://docs.mongodb.com/manual/reference/operator/query/
            },
            location: {
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude]

                    },
                    $maxDistance:10000,
                }
            }
        });
        
        console.log(devs);
        return res.json(devs);
    }
};