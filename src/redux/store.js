import { combineReducers, createStore } from "redux";
import initialState from "./initialState";
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';

const reducers = {
    categories: categoriesReducer,
    products: productsReducer
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
    combinedReducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;