import React, { useState } from 'react';
import data from './data.json';
import './App.css';

function App() {
  const [orders, setOrders] = useState({});
  const [isOrdered, setIsOrdered] = useState(false);

  const handleAddOrder = (food) => {
    setOrders((prevOrders) => ({
      ...prevOrders,
      [food.name]: {
        ...food,
        quantity: prevOrders[food.name] ? prevOrders[food.name].quantity + 1 : 1,
      },
    }));
  };
  const handleOrder = (food) => {
    setOrders((prevOrders) => ({
      ...prevOrders,
      [food.name]: {
        ...food,
        quantity: prevOrders[food.name] ? prevOrders[food.name].quantity - 1 : 1,
      },
    }));
  };

  const handleOrderedClick = () => {
    setIsOrdered(true);
  };

  const handleBackClick = () => {
    setIsOrdered(false);
  };

  const getTotalAmount = () => {
    return Object.values(orders).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container">
      {isOrdered ? (
        <div className="Zakazlar">
          <h1>Summa</h1>
          <h2>${getTotalAmount()}</h2>
          <p>Yana kelin</p>
          <button className="button" onClick={handleBackClick}>
            &larr; Back
          </button>
        </div>
      ) : (
        <>
          <h1 className="h1">Menu</h1>
          <div className="board">
            {/* Uzbek Taomlar */}
            <div className="section">
              <h2>Uzbek Taomlar</h2>
              {data.UzbekFoods.map((food) => (
                <div className="food" key={food.name}>
                  <img className="food-img" src={food.image} alt={food.name} />
                  <h3>{food.name}</h3>
                  <p>${food.price}</p>
                  <p className="desc">{food.description}</p>
                  <div className="counter">
                    <button
                      className="button"
                      onClick={() => handleAddOrder(food)}
                    >
                      +
                    </button>
                    <p>Zakaz: {orders[food.name]?.quantity || 0}</p>
                    <button
                      className="button-minus"
                      onClick={() => handleOrder(food)}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Turkish Foods */}
            <div className="section">
              <h2>Turk Taomlar</h2>
              {data.TurkishFoods.map((food) => (
                <div className="food" key={food.name}>
                  <img className="food-img" src={food.image} alt={food.name} />
                  <h3>{food.name}</h3>
                  <p>${food.price}</p>
                  <p className="desc">{food.description}</p>
                  <div className="counter">
                  <button
                      className="button"
                      onClick={() => handleAddOrder(food)}
                    >
                      +
                    </button>
                    <p>Zakaz: {orders[food.name]?.quantity || 0}</p>
                    <button
                      className="button-minus"
                      onClick={() => handleOrder(food)}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Uygur Taomlar */}
            <div className="section">
              <h2>Uygur Taomlar</h2>
              {data.UygurFoods.map((food) => (
                <div className="food" key={food.name}>
                  <img className="food-img" src={food.image} alt={food.name} />
                  <h3>{food.name}</h3>
                  <p>${food.price}</p>
                  <p className="desc">{food.description}</p>
                  <div className="counter">
                  <button
                      className="button"
                      onClick={() => handleAddOrder(food)}
                    >
                      +
                    </button>
                    <p>Zakaz: {orders[food.name]?.quantity || 0}</p>
                    <button
                      className="button-minus"
                      onClick={() => handleOrder(food)}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="button ordered-button" onClick={handleOrderedClick}>
            Summa bilish
          </button>
        </>
      )}
    </div>
  );
}

export default App;