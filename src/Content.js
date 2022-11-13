import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ProjectsFrontend from './pages/ProjectsFrontend';
import './CSS/index.css';

class Content extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/projects-frontend" component={ProjectsFrontend} />
        </Switch>
      </main>
    );
  }
}

export default Content;
