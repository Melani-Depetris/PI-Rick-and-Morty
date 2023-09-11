// const URL_BASE = 'https://rym2-production.up.railway.app/api/character';
// const API_KEY = 'key=henrym-melani-depetris';
const URL_BASE = 'https://rickandmortyapi.com/api/character';
const axios = require('axios');

const getCharById = async (req, res) => {

    try {
        let { id } = req.params
        // const { name, gender, status, species, origin, image } = ( await axios.get(`${URL_BASE}/${id}?${API_KEY}`)).data
        const { name, gender, status, species, origin, image } = ( await axios.get(`${URL_BASE}/${id}`)).data

            const character = {
                id: +id,
                name,
                image,
                gender,
                species,
                origin,
                status
            }
            return character.name ?
            res.status(200).json(character) :
            res.status(404).send('Not fount')
            
    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = getCharById;