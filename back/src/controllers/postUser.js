const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {

        if (email && password) {

            const [user, created] = await User.findOrCreate({
                where: {
                    email: req.body.email
                },
                defaults: {
                    password: req.body.password
                }
            })

            created ? res.status(201).json(user) : res.status(200).send('El usario ya existe')

        } else {

            res.status(400).send('Faltan datos.')

        }

    } catch (error) {


        res.status(500).json({ error: error.message })

    }
};

module.exports = postUser;