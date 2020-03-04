import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTotal, clearOrder } from '../actions';

import Card from './Card';

function Order(props) {
  const { pizzaOrder, beerOrder, cocktailOrder, total } = props;
  const [showingPayment, toggleShowing] = useState(false);

  const togglePayment = () => {
    toggleShowing(!showingPayment);
  };

  useEffect(() => {
    props.getTotal(pizzaOrder, beerOrder, cocktailOrder);
  });

  return (
    <div className="Order-page">
      <div className="Container">
        <div className="Receipt">
          <h2>Order:</h2>
          {pizzaOrder.length >= 1 && <h2>Pizza</h2>}
          <ul>
            {pizzaOrder.map(item => (
              <li>
                <span className="Title">{`${item.name} Pizza`}</span>
                <span>{`$${item.price.toFixed(2)}`}</span>
                <ul>
                  <li>
                    <ul>
                      {item.toppings &&
                        item.toppings.map(topping => <li>{topping}</li>)}
                    </ul>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          {beerOrder.length >= 1 && <h2>Beer</h2>}
          <ul>
            {beerOrder.map(item => (
              <li>
                <span className="Title">{item.name}</span>
                <span>{`$${item.price.toFixed(2)}`}</span>
              </li>
            ))}
          </ul>
          {cocktailOrder.length >= 1 && <h2>Cocktail</h2>}
          <ul>
            {cocktailOrder.map(item => (
              <li>
                <span className="Title">{item.name}</span>
                <span>{`$${item.price.toFixed(2)}`}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="Checkout-main">
          <div className="Checkout">
            <span>{`Sub total: $${Number(total).toFixed(2)}`}</span>
            <span>{`Tax: $${(Number(total) * 0.101).toFixed(2)}`}</span>
            <span>
              {`Total: $${(Number(total) + Number(total) * 0.101).toFixed(2)}`}
            </span>
            {total <= 0 ? (
              <span className="Order-message">
                You must add items to the order before checking out
              </span>
            ) : (
              <button type="button" onClick={togglePayment}>
                <span>Order</span>
              </button>
            )}
          </div>
          {showingPayment && <Card toggle={togglePayment} />}
        </div>
      </div>
    </div>
  );
}

Order.propTypes = {
  getTotal: PropTypes.func.isRequired,
  pizzaOrder: PropTypes.array.isRequired,
  beerOrder: PropTypes.array.isRequired,
  cocktailOrder: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    pizzaOrder: state.pizzaOrder,
    beerOrder: state.beerOrder,
    cocktailOrder: state.cocktailOrder,
    total: state.total
  };
};

export default connect(mapStateToProps, { getTotal, clearOrder })(Order);
