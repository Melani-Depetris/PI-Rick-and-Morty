import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './Detail.css'

const Detail = () => {
    const [character, setCharacter] = useState({});
    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        // axios(`http://localhost:3001/rickandmorty/character/${id}`)
        const URL_BASE = 'https://rym2-production.up.railway.app/api/character';
        const API_KEY = 'key=henrym-melani-depetris';

        // axios.get((`${URL_BASE}/${id}?${API_KEY}`))        
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                    setIsLoading(false);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            });
        return setCharacter({});
    }, [id]);

    return (
        <div className='ContenedorDetail'>

            {isLoading ? <div className="video">
                Cargando datos...
            </div> :
                (<div className="Recuadro">
                    <img className="ImgDetail" src={character?.image} alt={character?.name} />


                    <div className="InfoDetail">
                        <h2>{character?.name}</h2>
                        <h2>{character?.status}</h2>
                        <h2>{character?.species}</h2>
                        <h2>{character?.gender}</h2>
                        <h2>{character?.origin?.name}</h2>
                    </div>

                </div>)
            }
        </div>
    )
};

export default Detail;