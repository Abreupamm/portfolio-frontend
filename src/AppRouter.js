import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import ProjectsDetails from './pages/projectsDetails/ProjectDetails';
import NotFound from './pages/NotFound';

class AppRouter extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/projects-details/:id" component={ ProjectsDetails } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default AppRouter;
