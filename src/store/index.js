import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './AuthReducer';

//import { createStore} from 'redux';


const store = configureStore({
    reducer: {
      
      auth: AuthReducer,
    },
});




export default store;