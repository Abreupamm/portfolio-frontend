import { Component } from 'react';
import Aside from '../components/Aside';
import Title from '../components/Title';
import ProjectsCard from '../components/ProjectsCard';
import data from '../utils/projectsList';
import '../CSS/pages/projectspage.css';

class ProjectsFrontend extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="projects-front">
        <Title title="PROJETOS FRONTEND" />
        <Aside history={history} />
        <div className="container-projects-cards">
          {data.map(
            (project) =>
              project.category === 'front' && (
                <ProjectsCard history={history} key={project.id} data={project} />
              )
          )}
        </div>
      </div>
    );
  }
}

export default ProjectsFrontend;
