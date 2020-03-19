import React from 'react';
import Pizza from './Pizza';
import Beer from './Beer';
import Cocktails from './Cocktails';

function Menu(props) {
  const { notify } = props;
  return (
    <div className="Menu-page Container">
      <h2>Pizza</h2>
      <Pizza />
      <div className="Menu-page-drinks">
        <div className="Drink-option">
          <h2>Beers</h2>
          <Beer notify={notify} />
        </div>
        <div className="Drink-option">
          <h2>Cocktails</h2>
          <Cocktails notify={notify} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
