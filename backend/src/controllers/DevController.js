const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
async store(req, res){
    const { github_username, techs, longitude, latitude} = req.body;

    const response = await axios.get(`https://api.github.com/users/${github_username}`);

    const {name = login, avatar_url, bio } = response.data; //name=login-> Se o name não existir, ele será igual ao login.

    const techsArray = techs.split(',').map(tech=> tech.trim());

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    };

    console.log(name , avatar_url, bio, techs );

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
    })

    return res.json(dev);
    }
};