import { Component } from 'react';
import Aside from '../components/Aside';
import Title from '../components/Title';
import data from '../utils/projectsList';

class ProjectsDetails extends Component {
  render() {
    const { history, match: { params: { id } } } = this.props;
    const projectData = data.filter((project) => project.id === JSON.parse(id));
    const { name } = projectData[0];
    return (
      <div>
        <Title title={name} />
        <Aside history={history} />
      </div>
    );
  }
}

export default ProjectsDetails;
