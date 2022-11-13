import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import './CSS/index.css';

class Content extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about-me" component={ AboutMe } />
        </Switch>
      </main>
    );
  }
}

export default Content;