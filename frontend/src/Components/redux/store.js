import { configureStore } from '@reduxjs/toolkit';
import { default as loginReducer } from './loginSlice';
import { default as registerReducer } from './registerSlice';

const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
    }
});

export default store;
