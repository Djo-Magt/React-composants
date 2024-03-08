import { configureStore} from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { carsReducer, addCar, removeCar, changeSearchTerm} from "./slices/carsSlice";
import { formReducer, changeName, changeCost} from "./slices/formSlice";
import { reset } from "./actions";

const store = configureStore({
    reducer:{
        songs: songsReducer,
        movies: moviesReducer,
        cars: carsReducer,
        form: formReducer
    }
});

export { store };
export { addSong, removeSong, addMovie, removeMovie, reset };
export {addCar, removeCar, changeSearchTerm, changeName, changeCost}





// const startingState = store.getState();
// console.log(startingState);

// ---------------------------------------------------------------------

// store.dispatch({
//     type:'song/addSong',
//     payload: 'New Song!!!'
// })

// __________ équivaut a : 

// store.dispatch(
//     songsSlice.actions.addSong("New Song !")
// )



// const finalState = store.getState();
// console.log(finalState);



// le addSong() ci-dessous ne correspond pas au addSong qui est dans le slice --> reducers
// ici addSong() est une "action" va retourner : {type:"song/addSong", payload: "New Song"}
// c'est ça qu'on va passer dans le store.dispatch()

// console.log(songsSlice.actions.addSong("New Song !")); 