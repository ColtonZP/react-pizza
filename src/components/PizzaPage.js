import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPizzaInfo, addPizza } from '../actions';
import pizzaPic from '../imgs/Pizza.jpg';

class PizzaPage extends Component {
  constructor() {
    super();
    this.state = {
      quantityInput: 1
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPizzaInfo(id);
  }

  updateQuantity(e) {
    const input = e.target.value;
    if (input <= 0 && input !== null && input !== '') {
      this.setState({ quantityInput: 1 });
    } else {
      this.setState({ quantityInput: input });
    }
  }

  render() {
    const { pizza, addPizza } = this.props;
    const { title, price, desc, img, toppings = [] } = pizza;
    const { quantityInput } = this.state;

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
              <form>
                <input
                  className="Pizza-quantity"
                  type="number"
                  value={this.state.quantityInput}
                  onChange={this.updateQuantity.bind(this)}
                />
                <Link to="/menu">
                  <button
                    type="button"
                    className="Add-custom-pizza"
                    onClick={() => addPizza(pizza, Number(quantityInput))}
                  >
                    <span>Add to order</span>
                  </button>
                </Link>
              </form>
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
  pizza: PropTypes.object.isRequired,
  addPizza: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getPizzaInfo, addPizza })(PizzaPage);
