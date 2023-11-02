const getBasket = () => {
  const basket = localStorage.getItem("basket");
  if (basket) {
    return JSON.parse(localStorage.getItem("basket"));
  } else {
    return [];
  }
};
const getTotalAmount = () => {
  const basket = localStorage.getItem("totalamount");
  if (basket) {
    return JSON.parse(localStorage.getItem("totalamount"));
  } else {
    return 0;
  }
};

const init = {
  products: [],
  category: [],
  filteredCategories: [],
  cartItems: getBasket(),
  totalAmount: getTotalAmount(),
  searchVisible: false,
  sidebar: false,
};

export default function Reducer(state = init, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "CATEGORY_FILTER":
      let newArr = [];
      newArr = state.products.filter((x) => x.category_id === action.payload);
      return { ...state, filteredCategories: newArr };
    case "BASKET":
      let totalAmount =
        state.totalAmount + action.payload.amount * action.payload.price;

      if (state.cartItems.find((x) => x.title === action.payload.title)) {
        let item = state.cartItems.find(
          (x) => x.title === action.payload.title
        );
        (item.amount += action.payload.amount),
          (item.subtotal += action.payload.amount * action.payload.price);
      } else {
        state.cartItems.push({
          ...action.payload,
          subtotal: action.payload.amount * action.payload.price,
        });
      }
      localStorage.setItem("basket", JSON.stringify(state.cartItems));
      localStorage.setItem("totalamount", JSON.stringify(totalAmount));
      return { ...state, totalAmount: totalAmount };
    case "BASKETITEMINC":
      let tempArr = state.cartItems;
      let item = tempArr.find((x) => x.title === action.payload.title);
      item.amount += 1;
      item.subtotal = item.amount * item.price;

      state.totalAmount = state.totalAmount + +item.price;
      console.log(tempArr);
      localStorage.setItem("basket", JSON.stringify(tempArr));
      localStorage.setItem("totalamount", JSON.stringify(state.totalAmount));

      return { ...state, cartItems: state.cartItems };
    case "BASKETDELETE":
      let filteredBasket = state.cartItems.filter(
        (x) => x.id !== action.payload
      );
      let filteredItem = state.cartItems.find((x) => x.id == action.payload);

      let updatedTotalAmount =
        state.totalAmount - filteredItem.amount * filteredItem.price;

      localStorage.setItem("basket", JSON.stringify(filteredBasket));
      localStorage.setItem("totalamount", JSON.stringify(updatedTotalAmount));
      return {
        ...state,
        cartItems: filteredBasket,
        totalAmount: updatedTotalAmount,
      };
    case "SIDEBAROPEN":
      return {
        ...state,
        sidebar: action.payload,
      };
    case "SIDEBARCLOSE":
      return {
        ...state,
        sidebar: action.payload,
      };
    case "SEARCHVISIBLE":
      return {
        ...state,
        searchVisible: action.payload,
      };
    case "SEARCHNOVISIBLE":
      return {
        ...state,
        searchVisible: action.payload,
      };
    default:
      return state;
  }
}
