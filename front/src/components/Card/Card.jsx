import { Link, useLocation } from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import './Card.css';
import IconCancel from '../../../public/simbol/cancel.png'
import IconNoFav from '../../../public/simbol/fav-no-heart.png'
import IconFav from '../../../public/simbol/fav-heart.png'

const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {

   const { pathname } = useLocation();

   const [isFav, setFavs] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose })
      setFavs(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFavs(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className='DivContainer'>
         {
            isFav ? (
               <button className='ButtonFav' onClick={handleFavorite}>
                  <img src={IconFav} alt='fav' width='18px' height='18px' />
               </button>
            ) : (
               <button className='ButtonFav' onClick={handleFavorite}>
                  <img className='noFav' src={IconNoFav} alt='noFav' />
               </button>
            )
         }
         {
            pathname !== '/favorites' &&
            <button className='ButtonX' onClick={() => onClose(id)} >
               <img src={IconCancel} alt='cancel' width='18px' height='18px' />
            </button>
         }

         <Link to={`/detail/${id}`}>
            <img className='Img' width='240px' height='240px' src={image} alt={name} />
            <h2 className='Name' >{name}</h2>
         </Link>

         <div className='DivInfo'>
            <h2>Species: {species}</h2>
            <h2>Gender: {gender}</h2>

         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);