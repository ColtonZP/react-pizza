import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import customPic from '../imgs/pizza/custom.png';

function Pizza(props) {
  const { pizzas } = props;
  return (
    <div className="Pizza-page">
      <div className="Container">
        <ul className="Food-flex">
          <li>
            <img alt="" src={customPic} />
            <Link to="/pizza/maker">
              <button type="button">Custom</button>
            </Link>
          </li>
          {pizzas.map(pizza => (
            <li key={pizza.name}>
              {/* <button
								type="button"
								onClick={() => props.pizzaOrder(pizza, 'pizza')}
							>
								Add to order
							</button> */}
              <img alt="" src={pizza.img} />
              <Link
                to={{
                  pathname: `/pizza-${pizza.name
                    .replace(/\s/g, '-')
                    .toLocaleLowerCase()}`,
                  props: pizza
                }}
              >
                <button type="button">{pizza.name}</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Pizza.propTypes = {
  pizzas: PropTypes.arrayOf.isRequired
};

const mapStateToProps = state => {
  return { pizzas: state.menu.pizzas };
};

export default connect(mapStateToProps)(Pizza);
