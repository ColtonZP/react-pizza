import React from 'react';
import Pizza from './Pizza';
import Beer from './Beer';
import Cocktails from './Cocktails';

function Menu(props) {
  return (
    <div className="Menu-page Container">
      <h2>Pizza</h2>
      <Pizza pizzaOrder={props.pizzaOrder} />
      <div className="Menu-page-drinks">
        <div className="Drink-option">
          <h2>Beers</h2>
          <Beer beerOrder={props.beerOrder} />
        </div>
        <div className="Drink-option">
          <h2>Cocktails</h2>
          <Cocktails cocktailOrder={props.cocktailOrder} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
