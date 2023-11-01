import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import removeCustomer, {
  addCustomerAction,
  getCustomerAction,
  removeCustomerAction,
} from './store/customerReducer';
import addCustomer from './store/customerReducer';
import { fetchCustomers } from './store/asyncActions/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customer.customer);

  const addCash = (cash) => {
    dispatch({
      type: 'ADD_CASH',
      payload: cash,
    });
  };

  const getCash = (cash) => {
    dispatch({
      type: 'GET_CASH',
      payload: cash,
    });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <>
      <div className="app">
        <div style={{ fontSize: '50px' }}>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять</button>
        <button
          onClick={() => {
            addCustomer(prompt());
          }}>
          Добавить пользователя
        </button>
        <button
          onClick={() => {
            dispatch(fetchCustomers());
          }}>
          Получить пользователей
        </button>
        <br></br>
      </div>{' '}
      <div>
        {customers.map((item) => (
          <h1 onClick={() => removeCustomer(item)}>{item.name}</h1>
        ))}
      </div>
    </>
  );
}

export default App;
