import { createStore } from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store