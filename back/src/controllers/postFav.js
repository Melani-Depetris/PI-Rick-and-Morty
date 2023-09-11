const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {

    const { id, name, origin, status, image, species, gender } = req.body;
    console.log(req.body);

    try {

        if (id && name && origin && status && image && species && gender) {

            const [favorite, created] = await Favorite.findOrCreate({
                where: {
                    id: id,
                },
                defaults: {

                    name: name,
                    status: status,
                    species: species,
                    gender: gender,
                    origin: origin,
                    image: image
                }
            })

            const favoritesAll = await Favorite.findAll()

            created ? res.status(201).json(favoritesAll) : res.status(200).send('Ya existe')

        } else {
            res.status(401).send('Faltan datos')
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = postFav;