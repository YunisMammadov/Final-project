const init = {
    products: [],
    category: [],
    filteredCategories: [],
  };
  export default function Reducer(state = init, action) {
    switch (action.type) {
      case "SET_PRODUCTS":
        return { ...state, products: action.payload, filteredProducts: action.payload };
      case "SET_CATEGORY":
        return { ...state, category: action.payload };
        case "CATEGORY_FILTER":
          let newArr = [];
          newArr = state.products.filter((x) => x.category_id === action.payload);
          return { ...state, filteredCategories: newArr };
      default:
        return state;
    }
  }
  