import React, { useState } from 'react';
import beerPic from '../imgs/beer.jpg';
import menu from './menu.json';

const { beers } = menu;

function Beer(props) {
  const [selectedBeer, changeDrink] = useState(beers[0]);

  const returnDrink = str => {
    const newStr = str.substring(0, str.indexOf(' - '));
    return beers.find(({ name }) => name === newStr);
  };

  return (
    <div className="Beer">
      <img src={beerPic} />
      <form>
        <select onChange={e => changeDrink(returnDrink(e.target.value))}>
          {beers.map(beer => (
            <option key={beer.name}>
              {`${beer.name} - $${beer.price.toFixed(2)}`}
            </option>
          ))}
        </select>
        <input
          type="submit"
          value="add to order"
          onClick={() => props.beerOrder(selectedBeer, 'beer')}
        />
      </form>
    </div>
  );
}

export default Beer;
