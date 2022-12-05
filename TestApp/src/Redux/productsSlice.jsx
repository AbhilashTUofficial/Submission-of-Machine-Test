import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import GetDataFromLocal from '../util/GetDataFromLocal';
import PutDataToLocal from '../util/PutDataToLocal';
// import { products } from '../data/productList';


const productsSlice = createSlice({
    name: 'productReducer',
    initialState: [],

    reducers: {

        loadLocalData: (state, action) => {
            console.log("loading");
            action.payload.map((product) => {
                state.push(product);
            });
        },


        addRating: (state, action) => {

            const currentProduct = state.find((product) => product.id === action.payload.id);
            currentProduct.ratings.push({
                phNumber: action.payload.phInput,
                rating: action.payload.rating
            });
            PutDataToLocal(state);

        },
        addProduct: (state, action) => {
            console.log(state);
            state.push({
                id: Math.random(10, 100),
                name: action.payload.name,
                amount: action.payload.amount,
                description: action.payload.description,
                image: action.payload.imgUri,
                ratings: []
            });
            PutDataToLocal(state);
        }


    },
});

export const {
    addRating,
    addProduct,
    loadLocalData,
} = productsSlice.actions;

export default productsSlice.reducer;