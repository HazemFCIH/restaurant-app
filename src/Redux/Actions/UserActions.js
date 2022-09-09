

//  ****** Actions Creators ****** //


import { SET_CARTITEMS, SET_CART_SHOW, SET_FOOD_ITEMS, SET_USER } from "./Types";



export const setUserAction = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const setCartShowAction = (cartShow) => {
    return {
        type: SET_CART_SHOW,
        payload: cartShow
    }
}

export const setCartItemsAction = (cartItems) => {
    return {
        type: SET_CARTITEMS,
        payload: cartItems
    }
}

export const setFoodItemsAction = (foodItems) => {
    return {
        type: SET_FOOD_ITEMS,
        payload: foodItems
    }
}









































// import { DECREMENT, INCREMENT, INC_BY_VAL } from "./Types";

// export const incrementAction = () => {
//     return {
//         type:INCREMENT
//     }
// }


// export const decrementAction = () => {
//     return {
//         type:DECREMENT
//     }
// }

// export const incrementByValAction = (vl) => {
//     return {
//         type:INC_BY_VAL,
//         payload:vl
//     }
// }