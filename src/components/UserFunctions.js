import axios from 'axios'


export const register = newUser => {
    return axios 
    .post('users/register', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        imgURL: newUser.imageURL,
        favoriteMethod: newUser.favoriteMethod
    })
    .then(res => {
        console.log("registered")
    })
}

export const login = user => {
    return axios 
    .post('users/login',{
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}