import { Component } from 'react';
import Aside from '../components/Aside';
import Title from '../components/Title';
import '../CSS/pages/projectspage.css';

class ProjectsBackend extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="projects-back">
        <Title title="PROJETOS BACKEND" />
        <Aside history={history} />
      </div>
    );
  }
}

export default ProjectsBackend;