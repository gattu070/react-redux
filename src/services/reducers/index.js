import { combineReducers } from "redux";
import { cardItems, wishItems } from "./reducer";

export default combineReducers({
    cardItems,
    wishItems,
})