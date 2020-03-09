import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPizzaInfo, addPizza } from '../actions';
import pizzaPic from '../imgs/Pizza.jpg';

class PizzaPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPizzaInfo(id);
  }

  render() {
    const { pizza } = this.props;
    const { title, price, desc, img, toppings = [] } = pizza;
    return (
      <div className="Pizza-page">
        <img className="Header-pic" alt="" src={pizzaPic} />
        <div className="Container">
          <div className="Pizza-live">
            <img className="Pizza-bottom" alt="" src={img} />
            <div className="Pizza-span">
              <span className="Pizza-price">
                {`${title} Pizza - $${Number(price).toFixed(2)}`}
              </span>
              <Link to="/menu">
                <button
                  type="button"
                  className="Add-custom-pizza"
                  onClick={() => this.props.addPizza(pizza, 'pizza')}
                >
                  <span>Add to order</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="Pizza-about">
            <div className="Pizza-description">
              <span className="Title">Description</span>
              <p>{desc}</p>
            </div>
            <div className="Pizza-toppings">
              <span className="Title">Toppings</span>
              <ul>
                {toppings.map(topping => (
                  <li key={topping}>{topping}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pizza: state.pizzaInfo };
};

PizzaPage.propTypes = {
  match: PropTypes.object.isRequired,
  pizza: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getPizzaInfo, addPizza })(PizzaPage);
