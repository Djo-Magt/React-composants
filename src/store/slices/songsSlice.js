import { createSlice } from "@reduxjs/toolkit";
import { reset } from '../actions'

const songsSlice = createSlice({
    name:'song',
    initialState:[],
    reducers:{
        // type: 'song' + 'addSong' = 'song/addSong'
        addSong(state, action){
            // on est en quelque sorte dans un 'case' de usereducer

            // state is not the big state object in the store, but the piece of state managed by this reducer
            // action correspond à ce que l'on passe quand on appelle dispatch

            // ici on est deja dans la bibli immer = pas besoin de return + on peut update le state direct
            state.push(action.payload);
        },
        // 'song' + 'removeSong' = 'song/removeSong'
        removeSong(state, action){
           state.splice(state.indexOf(action.payload), 1)
        }
    },
    extraReducers(builder){
        builder.addCase(reset, (state, action) => {
            // ici state est la liste de movies 
            // state = [] ne fonctionne pas 
            return [];
        })
    }
    

    // -----------------   pour acceder au action reset qui est dans moviesSlice
    // extraReducers(builder) {
    //     builder.addCase( moviesSlice.actions.reset, (state, action) => {
            // --------- ici on accede quand même au state de songsSlice
            // --------- moviesSlice.actions.reset ===   'movie/reset'
    //         return [];
    //     })
    // }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;