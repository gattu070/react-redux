import { ADD_TO_CART } from "../constants";
import { ADD_TO_WISHLIST } from "../constants";

export const addToCart = (data) => {
    console.log("action", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const addToWish = (wdata) => {
    console.log("action", wdata);
    return {
        type: ADD_TO_WISHLIST,
        wdata: wdata
    }
}