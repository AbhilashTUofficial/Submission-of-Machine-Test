import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/productList';

const productsSlice = createSlice({
    name: 'productReducer',
    initialState: products,
    // {
    //     id: '',
    //     name: '',
    //     image: [],
    //     description: '',
    //     amount: '',
    //     ratings: [],
    // },
    reducers: {


        addRating: (state, action) => {

            const currentProduct = state.find((product) => product.id === action.payload.id);
            currentProduct.ratings.push({
                phNumber: action.payload.phInput,
                rating: action.payload.rating
            });
        },
        addProduct: (state, action) => {
            state.push({
                id: Math.random(0, 100),
                name: action.payload.name,
                amount: action.payload.amount,
                description: action.payload.description,
                image: action.payload.imgUri,
                ratings: []
            });
        }


    },
});

export const {
    addRating,
    addProduct
} = productsSlice.actions;

export default productsSlice.reducer;