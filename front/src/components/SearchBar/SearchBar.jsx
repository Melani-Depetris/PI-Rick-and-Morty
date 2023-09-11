import { useState } from 'react';
import './SearchBar.css'
import dados from '../../../public/simbol/dados.png'

const SearchBar = ({ onSearch }) => {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(() => event.target.value)
   }

   const handleRandom = () => {
      let idRandom = Math.floor(Math.random() * (826)) + 1
      onSearch(idRandom)
   }

   return (
      <div className='Search'>

         <input className='SearchInput' type='search' value={id} onChange={handleChange} />

         <button className='SearchButton' onClick={() => { onSearch(id); setId('') }}>
            ADD
         </button>

         <button onClick={handleRandom} className='SearchButton'>
            <img src={dados} alt='dados' width='40px' heigth='40px'/>
         </button>

      </div>
   )
};

export default SearchBar;
