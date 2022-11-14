import { Component } from 'react';
import Aside from '../components/Aside';
import Title from '../components/Title';
import '../CSS/pages/projectspage.css';

class ProjectsFrontend extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="projects-front">
        <Title title="PROJETOS FRONTEND" />
        <Aside history={history} />
      </div>
    );
  }
}

export default ProjectsFrontend;
