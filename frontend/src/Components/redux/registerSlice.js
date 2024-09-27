import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        newUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        registerStart: (state) => {
            state.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.newUser = action.payload;
            state.isFetching = false;
            state.error = false;
        },
        registerFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})

export const { registerStart, registerFailed, registerSuccess } = registerSlice.actions;
export default registerSlice.reducer;