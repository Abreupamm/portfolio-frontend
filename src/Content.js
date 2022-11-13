import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './CSS/index.css';

class Content extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </main>
    );
  }
}

export default Content;