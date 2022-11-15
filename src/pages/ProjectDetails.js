import { Component } from 'react';
import Aside from '../components/Aside';
import Title from '../components/Title';
import data from '../utils/projectsList';
import LanguageProgress from '../components/LanguageProgress';
import { fetchLanguageProgress } from '../utils/fetchProjects';

class ProjectsDetails extends Component {
  state = {
    name: '',
    values: [],
    keys: [],
  };
  componentDidMount = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const projectData = data.filter((project) => project.id === JSON.parse(id));
    const { name, projectName } = projectData[0];
    this.setState({ name, projectName });

    const getProgress = await fetchLanguageProgress(projectName);
    const values = Object.values(getProgress).map(
      (value) => (value / 100).toFixed() - 2
    );
    const keys = Object.keys(getProgress);
    this.setState({ keys, values });
    
  };

  render() {
    const { history } = this.props;

    const { keys, values, name } = this.state;
    return (
      <div>
        <Title title={name} />
        <Aside history={history} />
        <div>
          {
            keys.map((key, index) => (
              <LanguageProgress tec={key} value={values[index]} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default ProjectsDetails;
