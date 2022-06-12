import { combineReducers } from "redux";
import ProductWishListReducer from "./ProductWishListReducer";
import CartReducer from "./CartReducer";
const rootReducer = combineReducers({ ProductWishListReducer, CartReducer })

export default rootReducer;