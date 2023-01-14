import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutMe from './pages/AboutMe';
import ProjectsFrontend from './pages/ProjectsFrontend';
import ProjectsBackend from './pages/ProjectsBackend';
import Contact from './pages/Contacts';
import ProjectsDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';

class AppRouter extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/projects-frontend" component={ProjectsFrontend} />
          <Route path="/projects-backend" component={ProjectsBackend} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects-details/:id" component={ProjectsDetails} />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default AppRouter;
