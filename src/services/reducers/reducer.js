import { ADD_TO_CART } from "../constants";
import { ADD_TO_WISHLIST } from "../constants";

const initialSate = {
    cardData: []
}

export function cardItems(state = [], action) {
    // console.log("reducer", action);
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

const initialState = {
    wishData: []
}

export function wishItems(state = [], action) {
    // console.log("reducer", action);
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [
                ...state,
                { wishData: action.wdata }
            ]
            break;
        default:
            return state;
    }
}