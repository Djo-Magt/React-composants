import { createSlice, nanoid } from "@reduxjs/toolkit";

//  nanoid sert à generer des random id

const carsSlice = createSlice({
    name:'car',
    initialState:{
        searchTerm:'',
        cars:[]
    },

    reducers:{
        changeSearchTerm(state, action){
            state.searchTerm = action.payload
        },

        addCar(state, action){
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },

        removeCar(state, action){
            // const index = state.cars.indexOf(action.payload)
            // state.splice(index, 1)

            const updated = state.cars.filter((car) => {
                return car.id !== action.payload;
            });

            state.cars = updated;
        },
    }

})

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;