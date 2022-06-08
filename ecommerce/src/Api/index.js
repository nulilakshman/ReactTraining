import axios from "axios";

export const saveProduct = async (product) => {
    const x = await axios.post(`${process.env.REACT_APP_API_BASE_URL}products`, product);
    return x;
}

export const getAllProducts = async () => {
    const x = await axios.get(`${process.env.REACT_APP_API_BASE_URL}products`);
    return x;
}

export const saveUsers = async (users) => {
    const x = await axios.post(`${process.env.REACT_APP_API_BASE_URL}users`,users);
}

export const getAllUsers = async () => {
    const x = await axios.get(`${process.env.REACT_APP_API_BASE_URL}users`);
    return x;
}