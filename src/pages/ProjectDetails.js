import { Component } from 'react';
import Aside from '../components/Aside';
import Title from '../components/Title';
import data from '../utils/projectsList';
import LanguageProgress from '../components/LanguageProgress';
import { fetchLanguageProgress } from '../utils/fetchProjects';
import '../CSS/pages/projectDetails.css';

class ProjectsDetails extends Component {
  state = {
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
    const {
      name,
      projectName,
      gif,
      description,
      urlApication,
      urlGitHub,
      stacks,
      skills,
    } = projectData[0];

    this.setState({
      name,
      projectName,
      gif,
      description,
      urlApication,
      urlGitHub,
      stacks,
      skills,
    });

    await this.createCalcProgress(projectName);
  };

  handleOnClick = ({ target }) => {
    let url;
    const { urlGitHub, urlApication } = this.state;
    target.name === 'code' ? (url = urlGitHub) : (url = urlApication);
    window.location.replace(url);
  };

  render() {
    const { history } = this.props;

    const { keys, values, name, gif, description, skills } = this.state;
    return (
      <div className="container-datails">
        <Title title={name} />
        <Aside history={history} />
        <div className='container-left'>
          {gif !== '' && <img src={gif} alt={`gif da aplicação ${name}`} />}
          <span className="skills">{`Habilidades: ${skills}`}</span>
        </div>
        <div className='container-right'>
          <p>{description}</p>
          <div className="div-buttons">
            <button onClick={this.handleOnClick} name="code">
              Ver Código
            </button>
            <button onClick={this.handleOnClick} name="application">
              Ver Aplicação
            </button>
          </div>
          <div className="div-progress">
            {keys.map((key, index) => (
              <LanguageProgress tec={key} value={values[index]} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsDetails;
