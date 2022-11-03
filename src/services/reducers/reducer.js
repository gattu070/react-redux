import { ADD_TO_CART } from "../constants";
import { REMOVE_TO_CART } from "../constants";

const initialSate = {
    cardData: []
}

export default function cardItems(state = [], action) {
    console.log("reducer", action);
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                { cardData: action.data }
            ]
            break;
        default:
            return state;
    }
}