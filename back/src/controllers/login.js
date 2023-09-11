const { User } = require('../DB_connection')

const login = async (req, res) => {
    const { email, password } = req.query;

    try {
        if (email && password) {

            const usuario = await User.findOne({
                where: {
                    email: email
                }
            })

            if (usuario) {
                usuario.password === password ? res.status(200).json({ access: true }) : res.status(403).send('Contraseña incorrecta')
            } else {
                res.status(404).send('Usuario no encontrado')
            }

        } else {
            res.status(400).send('Faltan datos')
        }

    } catch (error) {

        res.status(500).json({error: error.message})
        
    }
};

module.exports = login;




// //Este controlador validará que el usuario que se está logeando tenga permiso
// const axios = require('axios');
// const users = require('../utils/users');

// const login = (req, res) => {
//     const { email, password } = req.query;
//     const userCheck = users.find((user) => user.email === email && user.password === password)
//     if (userCheck) {
//         res.status(200).json({ access: true })
//     } else {
//         res.status(200).json({ access: false })
//     }
// };

// module.exports = login;