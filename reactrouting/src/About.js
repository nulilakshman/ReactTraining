import React from "react"
import { useParams } from 'react-router-dom'
import store from './store'
import { addItemToCart, removeItemFromCart } from './actions'
const About = () => {
    let params = useParams()
    window.store = store;
    window.addItemToCart = addItemToCart;
    window.removeItemFromCart = removeItemFromCart;

    const onSave = (e) => {
        // alert('Submit Triggered !!!')
        localStorage.setItem('userid', 10001);
        localStorage.setItem('name', 'test-name');

        sessionStorage.setItem('phone', '9978123456');
        e.preventDefault();
    }

    const onSubscribe = () => {
        store.subscribe(onChangeInState);
    }

    const onChangeInState = () => {
        // THis is my callback function
        console.log('State is changed in store !!');
    }

    const addItemToStore = () => {
        const product = { id: 10001, name: 'Milk' };
        const obj = { selectedproduct: product, type: 'ADD-TO-CART' }
       // const obj = addItemToCart(product);
        store.dispatch(obj)
    }

    const removeItemFromStore = () => {
        const product = { id: 10001, name: 'Milk' };
        const obj = { selectedproduct: product, type: 'REMOVE-FROM-CART' }
        store.dispatch(obj)
    }


    return (
        <React.Fragment>
            <h2>About Component</h2>
            <p>
                Value passed : {params.id}</p>
            Name passed : {params.name}
            <p>Local Storage  Name :{localStorage.getItem('name')}</p>
            <p>Session Storage  Name :{sessionStorage.getItem('phone')}</p>

            <form onSubmit={onSave}>
                <input type="submit" value="Save"></input>
            </form>

            <button value="Subscribe To Store" onClick={onSubscribe}>Subscribe To Store</button>
            <button onClick={addItemToStore}>Add Item To Cart</button>
            <button onClick={removeItemFromStore}>Remove Item From Cart</button>
        </React.Fragment>
    )
}

export default About