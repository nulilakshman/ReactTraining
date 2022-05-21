import axios from "axios";

export const getAllUsers = async () => {
    const x = await axios.get('https://reqres.in/api/users?page=2');
    return x;
}

export const getUserDetailsById = async (id) => {
    const x = await axios.get(`https://reqres.in/api/users/${id}`)
    return x;
}