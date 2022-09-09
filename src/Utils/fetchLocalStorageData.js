
//  ****** Fetching stored user data from localStorage ****** //

export const fetchUser = () => {
    const userInfo =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();
  
    return userInfo;
  };

  //  ****** Fetching stored cart data from localStorage ****** //
  
  export const fetchCart = () => {
    const cartInfo =
      localStorage.getItem("cartItems") !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItems"))
        : localStorage.clear();
  
    return cartInfo ? cartInfo : [];
  };