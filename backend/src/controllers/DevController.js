const axios = require('axios');
const Dev = require('../models/Dev');
const parseStrinToArray = require('../utils/parseStringToArray');

//index, show, store, update, destroy

module.exports = {

async index (req,res){
    const devs = await Dev.find();
    return res.json(devs);
},
async store(req, res){
    const { github_username, techs, longitude, latitude} = req.body;

    let dev = await Dev.findOne({ github_username });

    if(!dev){
        const response = await axios.get(`https://api.github.com/users/${github_username}`);

        const {name = login, avatar_url, bio } = response.data; //name=login-> Se o name não existir, ele será igual ao login.

        const techsArray = parseStrinToArray(techs);

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };

        console.log(name , avatar_url, bio, techs );

        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        })
    };
    
    return res.json(dev);
    }
};