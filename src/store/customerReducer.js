// Правильный рефакторинг


const GET_CUSTOMERS = 'GET_CUSTOMERS'
const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';


const defaultState = {
  customer: [],
};
const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return { ...state, customer: [...state.customer, ...action.payload] }
    case ADD_CUSTOMER:
      return { ...state, customer: [...state.customer, action.payload] };
    case REMOVE_CUSTOMER:
      return { ...state, customer: state.customer.filter((item) => item.id !== action.payload) };

    default:
      return state;
  }
};

export const getCustomersAction=(payload)=>({type: GET_CUSTOMERS,payload})
export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload }); //action creator
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload });
export default customerReducer;
