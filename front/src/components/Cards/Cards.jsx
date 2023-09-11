import Card from '../Card/Card.jsx';
import './Cards.css'

const Cards = ({ characters, onClose }) => {
   return (
      <div className='CardsContainers'>
            {
               characters.map((char) => {
                  return <Card
                     id={char.id}
                     name={char.name}
                     status={char.status}
                     species={char.species}
                     gender={char.gender}
                     origin={char.origin.name}
                     image={char.image}
                     onClose={onClose}
                     key={char.id}
                  />
               })
            }
         </div>
   );
}

export default Cards;