import { Component } from 'react';
import Aside from '../components/Aside';
import Title from '../components/Title';
import data from '../utils/projectsList';
import LanguageProgress from '../components/LanguageProgress';
import { fetchLanguageProgress } from '../utils/fetchProjects';
import '../CSS/pages/projectDetails.css';

class ProjectsDetails extends Component {
  state = {
    name: '',
    values: [],
    keys: [],
  };

  createCalcProgress = async (projectName) => {
    const getProgress = await fetchLanguageProgress(projectName);
    let calc = 0;
    Object.values(getProgress).map((value) => (calc += value));
    const values = Object.values(getProgress).map((value) =>
      ((value / calc) * 100).toFixed()
    );
    const keys = Object.keys(getProgress);
    this.setState({ keys, values });
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
    await this.createCalcProgress(projectName);
  };

  render() {
    const { history } = this.props;

    const { keys, values, name } = this.state;
    return (
      <div className='container-datails'>
        <Title title={name} />
        <Aside history={history} />
        <div>
          {keys.map((key, index) => (
            <LanguageProgress tec={key} value={values[index]} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectsDetails;
