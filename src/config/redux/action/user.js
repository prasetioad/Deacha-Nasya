import axios from "axios";

export const login = (data, isAdmin) => (dispatch) =>{
    return new Promise((resolve, reject) =>{
        const url = process.env
        axios.post(`${url}/users/login`, {
            email: data.email,
            password: data.password,
            isSeller,
        })
        .then((res) =>{
            dispatch({ type : 'LOGIN', payload: res.data.data});
            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('userId', res.data.data.userId)
            resolve(res.data.message)
        })
        .catch((err)=>{
            reject(new Error(err.response.data.message));
        })
    })
}