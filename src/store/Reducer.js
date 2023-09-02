const init = {
    products: [],
    category: [],
    filteredProducts: [],
  };
  export default function Reducer(state = init, action) {
    switch (action.type) {
      case "SET_PRODUCTS":
        return { ...state, products: action.payload, filteredProducts: action.payload };
      case "SET_CATEGORY":
        return { ...state, category: action.payload };
      case "PRODUCT_FILTER":
        let newArr = [];
        newArr = state.products.filter((x) => x.category === action.payload)
        return { ...state, filteredProducts: newArr };
      default:
        return state;
    }
  }
  