import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import PizzaMaker from './components/PizzaMaker';
import PizzaPage from './components/PizzaPage';
import Order from './components/Order';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pizzaOrder: [],
			beerOrder: [],
			cocktailOrder: [],
			orderTotal: 0,
			orderId: 0,
		};
	}

	toggle = () => {
		this.setState(prevState => ({ menuShow: !prevState.menuShow }));
	};

	addToOrder = (item, type) => {
		if (type === 'pizza') {
			this.setState(prevState => ({
				pizzaOrder: [...prevState.pizzaOrder, item],
				orderTotal: prevState.orderTotal + item.price,
			}));
		} else if (type === 'beer') {
			this.setState(prevState => ({
				beerOrder: [...prevState.beerOrder, item],
				orderTotal: prevState.orderTotal + item.price,
			}));
		} else if (type === 'cocktail') {
			this.setState(prevState => ({
				cocktailOrder: [...prevState.cocktailOrder, item],
				orderTotal: prevState.orderTotal + item.price,
			}));
		}
		this.setState(prevState => ({
			orderId: prevState.orderId+=1,
		}));
	};

	clearOrder = () => {
		this.setState({
			menuShow: false,
			pizzaOrder: [],
			beerOrder: [],
			cocktailOrder: [],
			orderTotal: 0,
			orderId: 1,
		});
	};

	render() {
		return (
			<div className="App">
				<Router onUpdate={() => window.scrollTo(0, 0)}>
					<ScrollToTop>
						<Header />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route
								exact
								path="/menu"
								component={() => (
									<Menu
										pizzaOrder={this.addToOrder}
										beerOrder={this.addToOrder}
										cocktailOrder={this.addToOrder}
									/>
								)}
							/>
							<Route
								exact
								path="/pizza/maker"
								component={() => <PizzaMaker pizzaOrder={this.addToOrder} />}
							/>
							<Route
								exact
								path="/order"
								component={() => (
									<Order order={this.state} finishOrder={this.clearOrder} />
								)}
							/>
							<Route
								path="/pizza-:id"
								component={props => (
									<PizzaPage {...props} pizzaOrder={this.addToOrder} />
								)}
							/>
						</Switch>
					</ScrollToTop>
				</Router>
			</div>
		);
	}
}

export default App;
