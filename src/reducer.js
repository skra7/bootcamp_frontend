export const initialState = {
    basket: [
      {
        id: "1212112",
        name: "Product Name",
        price: 11.96,
        rating: 5,
        image: "https://m.media-amazon.com/images/I/41Kmm4lKiFL._AA210_.jpg",
      },
      {
        id: "1212112",
        name: "Product Name",
        price: 11.96,
        rating: 5,
        image: "https://m.media-amazon.com/images/I/41Kmm4lKiFL._AA210_.jpg",
      },
    ],
  };
  
  export const getbasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        // LOGIC FOR ADDING TO BASKET
        return { ...state, basket: [...state.basket, action.item] };
        break;
      case "REMOVE_FROM_BASKET":
        //LOGIC FROM REMOVING FROM BASKET
        let newBasket = [...state.basket];
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        if (index >= 0) {
          // Item exists in basket
          newBasket.splice(index, 1);
        } else {
          console.warn(`Cant find the id with the ${action.id}`);
        }
        return { ...state, basket: newBasket };
        break;
      default:
        return state;
    }
  };
  
  export default reducer;
  