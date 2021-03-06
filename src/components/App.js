/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Menu from './Menu';
import PizzaMaker from './PizzaMaker';
import PizzaPage from './PizzaPage';
import Order from './Order';
import ScrollToTop from './ScrollToTop';

class App extends Component {
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
                  <PizzaPage match={props.match} pizzaOrder={this.addToOrder} />
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
