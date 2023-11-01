import { getCustomersAction } from "../customerReducer"

export function fetchCustomers(){
  return function (dispatch){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(getCustomersAction(json)))
  }
}