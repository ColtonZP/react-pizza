import React, { useState } from 'react';
import cocktailPic from '../imgs/cocktail.jpg';
import menu from '../components/menu.json';

const cocktails = menu.cocktails;

function Cocktails(props) {
	const [selectedCocktail, changeDrink] = useState(cocktails[0]);

	const returnDrink = str => {
		const newStr = str.substring(0, str.indexOf(' - '));
		return cocktails.find(({ name }) => name === newStr);
	};

	return (
		<div className="Cocktail">
			<img src={cocktailPic} />
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

// Cocktails.propTypes = {
// 	cocktailOrder: PropTypes.arrayOf.isRequired,
// };

export default Cocktails;
