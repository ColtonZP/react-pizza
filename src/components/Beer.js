import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import beerPic from '../imgs/beer.jpg';

function Beer(props) {
  const { beers } = props;
  const [selectedBeer, changeDrink] = useState(beers[0]);

  const returnDrink = str => {
    const newStr = str.substring(0, str.indexOf(' - '));
    return beers.find(({ name }) => name === newStr);
  };

  return (
    <div className="Beer">
      <img src={beerPic} alt="beer on bar table" />
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

Beer.propTypes = {
  beers: PropTypes.arrayOf.isRequired,
  beerOrder: PropTypes.arrayOf.isRequired
};

const mapStateToProps = state => {
  return { beers: state.menu.beers };
};

export default connect(mapStateToProps)(Beer);
