
import { loginStart, loginFailed, loginSuccess } from './loginSlice';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());

    try {
        const res = await axios.post('/v1/auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/')
    } catch (error) {
        dispatch(loginFailed());
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());

    try {
        const res = await axios.post('/v1/auth/register', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFailed());
    }
}
