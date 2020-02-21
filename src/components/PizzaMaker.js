import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pizzaPic from '../imgs/Pizza.jpg';
import customPic from '../imgs/pizza/custom.png';

const meatToppings = [
	'Pepperoni',
	'Ham',
	'Sausage',
	'Bacon',
	'Chicken',
	'Beef',
];
const veggieToppings = [
	'Onion',
	'Green Pepper',
	'Mushroom',
	'Olive',
	'Jalapeno',
	'Tomato',
];
const nonVeggieToppings = ['Pineapple', 'BBQ Sauce', 'Buffalo Sauce'];

function PizzaMaker(props) {
	const [pizza, changePizza] = useState({
		name: 'Custom',
		toppings: [],
		price: 12.0,
	});

	const updatePizza = async (e, topping, amount) => {
		let price = 12;
		e.target.parentNode.querySelector('.Active').classList.remove('Active');
		e.target.className = 'Active';
		let { toppings } = pizza;
		toppings = toppings.filter(i => i !== topping);
		if (amount === 'normal') {
			toppings = [...toppings, topping];
		} else if (amount === 'extra') {
			toppings = [...toppings, topping, topping];
		}
		price += toppings.length * 0.5;
		changePizza({ ...pizza, toppings, price });
	};

	return (
		<div className="Pizza-page">
			<img className="Header-pic" alt="" src={pizzaPic} />
			<div className="Container">
				<div className="Pizza-live">
					<img className="Pizza-bottom" alt="" src={customPic} />
					{pizza.toppings.map(topping => (
						<img
							className="Topping"
							alt=""
							src={require(`../imgs/pizza/toppings/${topping}.png`)}
						/>
					))}
					<div className="Pizza-span">
						<span className="Pizza-price">${pizza.price.toFixed(2)}</span>
						<Link to="/menu">
							<button
								type="button"
								className="Add-custom-pizza"
								onClick={() => props.pizzaOrder(pizza, 'pizza')}
							>
								<span>Add to order</span>
							</button>
						</Link>
					</div>
				</div>
				<div className="Toppings">
					<div className="Meats">
						<span className="Tittle">Meats</span>
						<ul>
							{meatToppings.map(topping => (
								<li>
									<div>
										<span>{topping}</span>
										<div className="Button-group">
											<button
												type="button"
												className="Active"
												onClick={e => updatePizza(e, topping, 'none')}
											>
												none
											</button>
											<button
												type="button"
												onClick={e => updatePizza(e, topping, 'normal')}
											>
												normal
											</button>
											<button
												type="button"
												onClick={e => updatePizza(e, topping, 'extra')}
											>
												extra
											</button>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="Veggie">
						<span className="Tittle">Veggie</span>
						<ul>
							{veggieToppings.map(topping => (
								<li>
									<div>
										<span>{topping}</span>
										<div className="Button-group">
											<button
												type="button"
												className="Active"
												onClick={e => updatePizza(e, topping, 'none')}
											>
												none
											</button>
											<button
												type="button"
												onClick={e => updatePizza(e, topping, 'normal')}
											>
												normal
											</button>
											<button
												type="button"
												onClick={e => updatePizza(e, topping, 'extra')}
											>
												extra
											</button>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="Non-veggie">
						<span className="Tittle">Non Veggie or Meats</span>
						<ul>
							{nonVeggieToppings.map(topping => (
								<li>
									<div>
										<span>{topping}</span>
										<div className="Button-group">
											<button
												type="button"
												className="Active"
												onClick={e => updatePizza(e, topping, 'none')}
											>
												none
											</button>
											<button
												type="button"
												onClick={e => updatePizza(e, topping, 'normal')}
											>
												normal
											</button>
											<button
												type="button"
												onClick={e => updatePizza(e, topping, 'extra')}
											>
												extra
											</button>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

PizzaMaker.propTypes = {
	pizzaOrder: PropTypes.arrayOf.isRequired,
};

export default PizzaMaker;
