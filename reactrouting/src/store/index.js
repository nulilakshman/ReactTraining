import { createStore } from 'redux';
import cartItemsReducer from '../reducers/cartItems'
import rootReducer from '../reducers';

//const store = createStore(cartItemsReducer)
const store = createStore(rootReducer)

export default store