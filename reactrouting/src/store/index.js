import { createStore } from 'redux';
import cartItemsReducer from '../reducers/cartItems'

const store = createStore(cartItemsReducer)

export default store