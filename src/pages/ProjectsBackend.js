import { Component } from 'react';
import '../CSS/pages/projectspage.css';
import Aside from '../components/Aside';
import Title from '../components/Title';
import ProjectsCard from '../components/ProjectsCard';
import data from '../utils/projectsList';

class ProjectsBackend extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="projects-back">
        <Title title="PROJETOS BACKEND" />
        <Aside history={history} />
        <div className="container-projects-cards">
          {data.map(
            (project) =>
              project.category === 'back' && <ProjectsCard data={project} />
          )}
        </div>
      </div>
    );
  }
}

export default ProjectsBackend;
