import { combineReducers } from "redux";
import cartItemsReducer from "./cartItems";
import ProductWishListReducer from "./ProductWishList";

const rootReducer = combineReducers({ cartItemsReducer, ProductWishListReducer })

export default rootReducer;