import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPizzaInfo } from '../actions';

import pizzaPic from '../imgs/Pizza.jpg';

class PizzaPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const pizzaCap = id.charAt(0).toUpperCase() + id.slice(1);
    this.props.getPizzaInfo(pizzaCap);
  }

  render() {
    const { pizza } = this.props;
    const { name, price, desc, img, toppings } = pizza;
    return (
      <div className="Pizza-page">
        <img className="Header-pic" alt="" src={pizzaPic} />
        <div className="Container">
          <div className="Pizza-live">
            <img className="Pizza-bottom" alt="" src={img} />
            <div className="Pizza-span">
              <span className="Pizza-price">
                {name} Pizza - ${Number(price).toFixed(2)}
              </span>
              <Link to="/menu">
                <button
                  type="button"
                  className="Add-custom-pizza"
                  onClick={() => this.props.pizzaOrder(pizza, 'pizza')}
                >
                  <span>Add to order</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="Pizza-about">
            <div className="Pizza-description">
              <span className="Tittle">Description</span>
              <p>{desc}</p>
            </div>
            <div className="Pizza-toppings">
              <span className="Tittle">Toppings</span>
              {/* <ul>
                {toppings.map(topping => (
                  <li>{topping}</li>
                ))}
              </ul> */}
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

export default connect(mapStateToProps, { getPizzaInfo })(PizzaPage);
