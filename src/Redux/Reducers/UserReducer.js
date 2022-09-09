
import { SET_CARTITEMS, SET_CART_SHOW, SET_FOOD_ITEMS, SET_USER } from "../Actions/Types";
import { fetchCart, fetchUser } from "../../Utils/fetchLocalStorageData";

//  ****** Fetching data from Utiles files ****** //

const userInfo = fetchUser();
const cartInfo = fetchCart();


//  ****** Initial State ****** //

const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems: cartInfo,
}

//  ****** Reducer ****** //

const UserReducer = (state = {...initialState} , action) => {
    
    switch (action.type) {
              case SET_USER:
                return {
                  ...state,
                  user: action.payload
                };
          
              case SET_FOOD_ITEMS:
                return {
                  ...state,
                  foodItems: action.payload
                };
          
              case SET_CART_SHOW:
                return {
                  ...state,
                  cartShow: action.payload
                };
          
              case SET_CARTITEMS:
                return {
                  ...state,
                  cartItems: action.payload
                };
          
              default:
                return state;
            }
}



export default UserReducer;





































// import { DECREMENT, INCREMENT, INC_BY_VAL } from "../Actions/Types";

// const initialState = {
//     count: 0
// };

// const CounterReducer = (state = {...initialState} , action) => {
//     switch(action.type){

//         case INCREMENT:
//             return {
//                  ...state, count:state.count + 1
//             };
        
//         case DECREMENT:
//             return {
//                 ...state, count:state.count-1
//             };

//         case INC_BY_VAL:
//             return {
//                 ...state, count:state.count + action.payload
//             }

//         default:
//             return state;
//     }
// }


// export default CounterReducer;