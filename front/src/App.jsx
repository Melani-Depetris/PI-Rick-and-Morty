import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Form from './components/Form/Form.jsx';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About.jsx';
import Favorites from './components/Favorites/Favorites.jsx'

// const EMAIL = 'melani.md98@gmail.com';
// const PASSWORD = 'asd123';

const URL_BASE = 'https://rym2-production.up.railway.app/api/character';
const API_KEY = 'key=henrym-melani-depetris';
// `${URL_BASE}/${id}?${API_KEY}`

const App = () => {
   const { pathname } = useLocation();
   // const pathname = useLocation().pathname; //useLocation es un objeto con muchas propiedades

   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   // const login = (userData) => {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // };

   // const login = (userData) => {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`)
   //       .then(({ data }) => {
   //          const { access } = data;
   //          setAccess(access);                       //
   //          access && navigate('/home');
   //       });
   // };

   const login = async (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      try {
         const { access } = data;
         setAccess(access);                       //
         access && navigate('/home');
      } catch (error) {
         console.log(error.message)
      }
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);



   const onSearch = async (id) => {

      try {
         let found = characters.some((character) => character.id === Number(id))

         if (found) {
            alert('Este personaje ya fue agregado.')
         } else {
            const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            if (data.name) setCharacters((characters) => [...characters, data]);
         }

      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }
   };


   // const onSearch = async (id) => {
   //    try {
   //       const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
   //       let found = characters.some((character) => character.id === Number(id))
   //       if (!found) {
   //                if (data.name) {
   //                   setCharacters((characters) => [...characters, data]);
   //                } else {
   //                   window.alert('¡No hay personajes con este ID!');
   //                }
   //             };
   //    } catch (error) {
   //       alert('Este personaje ya fue agregado.')  
   //    }
   // };

   // const onSearch = (id) => {
   //    let found = characters.some((character) => character.id === Number(id))
   //    if (!found) {
   //       // axios(`${URL_BASE}/${id}?${API_KEY}`).then(({ data }) 
   //       axios(`http://localhost:3001/rickandmorty/character/${id}`)
   //          .then(({ data }) => {
   //             if (data.name) {
   //                setCharacters((characters) => [...characters, data]);
   //             } else {
   //                window.alert('¡No hay personajes con este ID!');
   //             }
   //          });
   //    } else {
   //       alert('Este personaje ya fue agregado.')
   //    }
   // };

   const onClose = (id) => {
      setCharacters(
         characters.filter(char => {
            return char.id !== Number(id)
         })
      )
   };

   return (
      <div className='ContainerApp'>
         {pathname !== '/' && pathname !== '/favorites' && <Nav onSearch={onSearch} />}

         <Routes>
            <Route path='/' element={<Form login={login} />} />

            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />

         </Routes>

      </div>
   );
}

export default App;
