import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pizzaPic from '../imgs/Pizza.jpg';
// import customPic from '../imgs/pizza/custom.png';

class PizzaPage extends Component {
	state = {
		pizza: {},
		name: '',
		price: '',
		img: '',
		desc: '',
		toppings: [],
		id: '',
	};

	componentDidMount() {
		const { match } = this.props;

		const id = match.params.id;
		const menu = require('./menu.json');
		const pizza = menu.pizzas[id];
		const desc = pizza.desc;
		const img = require(`../imgs/pizza/${pizza.name
			.replace(/\s/g, '-')
			.toLocaleLowerCase()}.png`);
		//const pizza = menu: id;

		this.setState({
			pizza,
			name: pizza.name,
			price: pizza.price,
			toppings: pizza.toppings,
			desc,
			img,
			id,
		});
	}

	render() {
		const { pizza, name, price, desc, img, toppings } = this.state;
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
							<ul>
								{toppings.map(topping => (
									<li>{topping}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// PizzaMaker.propTypes = {
// 	pizzaOrder: PropTypes.arrayOf.isRequired,
// };

export default PizzaPage;
