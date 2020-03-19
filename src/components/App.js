/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Menu from './Menu';
import PizzaMaker from './PizzaMaker';
import PizzaPage from './PizzaPage';
import Order from './Order';
import Notification from './Notification';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notifications: []
    };
  }

  notify = message => {
    const { notifications } = this.state;
    const index = notifications.length;
    console.log(index);
    this.setState({
      notifications: [...notifications, <Notification message={message} />]
    });
    setTimeout(() => {
      this.setState({
        notifications: []
      });
    }, 3000);
  };

  render() {
    return (
      <div className="App">
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <ScrollToTop>
            <Header />
            {this.state.notifications}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/menu"
                component={() => <Menu notify={this.notify} />}
              />
              <Route
                exact
                path="/pizza/maker"
                component={() => <PizzaMaker />}
              />
              <Route exact path="/order" component={() => <Order />} />
              <Route
                path="/pizza-:id"
                component={props => (
                  <PizzaPage match={props.match} notify={this.notify} />
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
