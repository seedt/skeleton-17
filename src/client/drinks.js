const orderDrink = (type, customerNumber) => {
  const order = {
    type: type,
    customerNumber: customerNumber
  }

  console.log(order)

  fetch('http://localhost:8000/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });
}


export { orderDrink }