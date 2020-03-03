import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import cocktailPic from '../imgs/cocktail.jpg';

function Cocktails(props) {
  const { cocktails } = props;

  const [selectedCocktail, changeDrink] = useState(cocktails[0]);

  const returnDrink = str => {
    const newStr = str.substring(0, str.indexOf(' - '));
    return cocktails.find(({ name }) => name === newStr);
  };

  return (
    <div className="Cocktail">
      <img src={cocktailPic} alt="cocktail on bar table" />
      <form>
        <select onChange={e => changeDrink(returnDrink(e.target.value))}>
          {cocktails.map(cocktail => (
            <option key={cocktail.name}>
              {`${cocktail.name} - $${cocktail.price.toFixed(2)}`}
            </option>
          ))}
        </select>
        <input
          type="submit"
          value="add to order"
          onClick={() => props.cocktailOrder(selectedCocktail, 'cocktail')}
        />
      </form>
    </div>
  );
}

Cocktails.propTypes = {
  cocktails: PropTypes.arrayOf.isRequired,
  cocktailOrder: PropTypes.arrayOf.isRequired
};

const mapStateToProps = state => {
  return { cocktails: state.menu.cocktails };
};

export default connect(mapStateToProps)(Cocktails);
