import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ProjectsFrontend from './pages/ProjectsFrontend';
import ProjectsBackend from './pages/ProjectsBackend';
import Contact from './pages/Contacts';
import NotFound from './pages/NotFound';

class Content extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/projects-frontend" component={ProjectsFrontend} />
          <Route path="/projects-backend" component={ProjectsBackend} />
          <Route path="/contact" component={Contact} />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default Content;
