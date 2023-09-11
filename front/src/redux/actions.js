import axios from 'axios';

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const CREATE_USER = "CREATE_USER";

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {

        try {
            const { data } = await axios.post(endpoint, character)
            console.log(data);
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    };
};

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//         axios.post(endpoint, character).then(({ data }) => {
//             return dispatch({
//                 type: 'ADD_FAV',
//                 payload: data,
//             });
//         });
//     };
// };

// export const addFav = (character) => {
//     console.log(character);
//     return {
//         type: ADD_FAV,
//         payload: character,
//     }
// };

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    console.log(endpoint);
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint)
            console.log(data);
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    };
};


// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//         axios.delete(endpoint).then(({ data }) => {
//             return dispatch({
//                 type: 'REMOVE_FAV',
//                 payload: data,
//             });
//         });
//     };
// };

// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id,
//     }
// };

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
};

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden,
    }
};

export const createUser = (userData) => {
    const endpoint = 'http://localhost:3001/rickandmorty/login';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, userData)
            return dispatch({
                type: CREATE_USER,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}