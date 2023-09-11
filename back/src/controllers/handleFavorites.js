//M3: Cuando funcionaba sin DB
// let myFavorites = [];

// const postFav = (req, res) => { 

//     const newFavorite = req.body;
//     myFavorites.push(newFavorite);
//     res.status(200).json(myFavorites);
// };

// //Acá estoy eliminando favoritos por id que llega por params
// const deleteFav = (req, res) => {
//     const delIdFav = req.params.id;
//     console.log(delIdFav);

//     myFavorites = myFavorites.filter((myFav) => myFav.id !== Number(delIdFav))
//     console.log('este es el array filtrado ', myFavorites)
//     res.status(200).json(myFavorites);
// };

// module.exports = {
//     postFav,
//     deleteFav 
// };