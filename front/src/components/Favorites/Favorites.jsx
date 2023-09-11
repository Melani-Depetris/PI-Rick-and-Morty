// import { connect } from 'react-redux';
import Card from '../Card/Card.jsx';
import { filterCards, orderCards } from '../../redux/actions.js'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './Favorites.css'
import { Link } from 'react-router-dom';
import atras from '../../../public/simbol/atras.png'

const Favorites = (props) => {

    const myFavorites = useSelector((state) => state.myFavorites)


    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    return (
        <div>
           
           <div className='FavsH1'>
           <Link to={'/home'}>
                <button className='buttonAtras'>
                    <img src={atras} alt={atras}/>
                </button>
            </Link>
            <h1 className='titulo'>My favorites</h1>
           </div>

           <select className='select' onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select className='select' onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>

            {/* <Cards characters={myFavorites}/> */}
            <div className='FavsContainer'>
                {
                    myFavorites.map(({ id, name, status, species, gender, origin, image }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                name={name}
                                status={status}
                                species={species}
                                gender={gender}
                                origin={origin}
                                image={image}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
};

export default Favorites;

// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites
//     }
// };

// export default connect(mapStateToProps, null)(Favorites)