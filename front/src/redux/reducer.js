import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, CREATE_USER} from './actions.js';

export const initialState = {
    myFavorites: [],
    allCharacters: [],
};
// console.log(allCharacters);

const rootReducer = (state = initialState, action) => {
    console.log();
    switch (action.type) {

        //NUEVO CASO DE ADD_FAV CON AXIOS
        // case 'ADD_FAV':
        //     return { ...state, 
        //         myFavorites: payload, 
        //         allCharacters: payload };

        case ADD_FAV:
            return {
                ...state,
                allCharacters: action.payload,
                myFavorites: action.payload
            };

        // NUEVO CASO DE REMOVE_FAV CON AXIOS
        case REMOVE_FAV:
            return {
                ...state, 
                allCharacters: action.payload,
                myFavorites: action.payload
            };

        // case REMOVE_FAV:
        //     const noFav = [...state.myFavorites];
        //     const filterFav = noFav.filter((fav) => fav.id !== Number(action.payload))
        //     return {
        //         ...state,
        //         myFavorites: filterFav
        //     };

        case FILTER:
            let filterData = [...state.allCharacters];
            return {
                ...state,
                myFavorites: filterData.filter((fil) => fil.gender === action.payload)
            }
        case ORDER:
            let orderData = [...state.allCharacters];
            // if(action.payload === A) {
            //     orderData=orderData.sort((a,b) => a.id - b.id)
            // } else {
            //     orderData=orderData.sort((a,b)=>b.id-a.id)
            // }
            return {
                ...state,
                // myFavorites: orderData
                myFavorites: (action.payload === 'A') ? orderData.sort((a, b) => a.id - b.id) : (action.payload === 'D') && orderData.sort((a, b) => b.id - a.id)
            }
        case CREATE_USER:
            return {
                ...state,  userCreated : true
            }

        default:
            return {
                ...state
            };
    }
};
export default rootReducer;
