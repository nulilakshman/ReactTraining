import { combineReducers } from "redux";
import cartItemsReducer from "./cartItems";
import ProductWishListReducer from "./ProductWishList";
import UserReducer from "./UserReducer";
const rootReducer = combineReducers({ cartItemsReducer, ProductWishListReducer, UserReducer })

export default rootReducer;