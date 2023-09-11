const server = require('./app')
const PORT = 3001;
const { conn } = require('./DB_connection')

// console.log(server);

conn.sync({force: false})
.then(() => server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   })
);
