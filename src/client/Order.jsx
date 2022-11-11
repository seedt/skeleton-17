import { useState } from 'react';
import { orderDrink } from './drinks';

const Order = () => {
  const [customerNumber, setCustomerNumber] = useState();

  const clickHandler = (e) => {
    e.preventDefault();

    orderDrink(e.target.name, customerNumber);
  }

  const changeCustomerName = (e) => {
    setCustomerNumber(e.target.value)
  }

  return (
    <div>
      <input type='text' name='customer-number' value={customerNumber} onChange={changeCustomerName} />
      <button onClick={clickHandler} name='BEER'>Beer</button>
      <button onClick={clickHandler} name='DRINK'>Drink</button>
    </div>
  )
};

export default Order;