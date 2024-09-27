import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },

        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isFetching = false;
            state.error = false;
        },

        loginFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})

export const { loginStart, loginFailed, loginSuccess } = loginSlice.actions;
export default loginSlice.reducer;