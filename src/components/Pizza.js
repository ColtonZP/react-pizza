import React from 'react';
import { Link } from 'react-router-dom';
import pepperoniPic from '../imgs/pizza/pepperoni.png';
import cheesePic from '../imgs/pizza/cheese.png';
import meatPic from '../imgs/pizza/meat-lovers.png';
import supremePic from '../imgs/pizza/supreme.png';
import veggiePic from '../imgs/pizza/veggie.png';
import hawaiianPic from '../imgs/pizza/hawaiian.png';
import bbqPic from '../imgs/pizza/bbq-chicken.png';
import buffaloPic from '../imgs/pizza/buffalo-chicken.png';
import customPic from '../imgs/pizza/custom.png';

const pizzas = [
	{
		name: 'Pepperoni',
		price: 12,
		toppings: ['pepperoni'],
		img: pepperoniPic,
	},
	{
		name: 'Cheese',
		price: 12,
		toppings: [''],
		img: cheesePic,
	},
	{
		name: 'Meat Lovers',
		price: 13.5,
		toppings: ['pepperoni', 'bacon', 'ham', 'sausage'],
		img: meatPic,
	},
	{
		name: 'Supreme',
		price: 14,
		toppings: ['pepperoni', 'green pepper', 'olives', 'onion'],
		img: supremePic,
	},
	{
		name: 'Veggie',
		price: 14,
		toppings: ['onion', 'mushroom', 'olives', 'green pepper'],
		img: veggiePic,
	},
	{
		name: 'Hawaiian',
		price: 13,
		toppings: ['ham', 'pineapple'],
		img: hawaiianPic,
	},
	{
		name: 'BBQ Chicken',
		price: 13,
		toppings: ['chicken', 'onion', 'bbq Sauce'],
		img: bbqPic,
	},
	{
		name: 'Buffalo Chicken',
		price: 13,
		toppings: ['chicken', 'buffalo sauce'],
		img: buffaloPic,
	},
];

function Pizza(props) {
	return (
		<div className="Pizza-page">
			<div className="Container">
				<ul className="Food-flex">
					<li>
						<img alt="" src={customPic} />
						<Link to="/pizza/maker">
							<button>Custom</button>
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
									props: pizza,
								}}
							>
								<button>{pizza.name}</button>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

// Pizza.propTypes = {
// 	pizzaOrder: PropTypes.arrayOf.isRequired,
// };

export default Pizza;
