import { Component } from 'react';
import Aside from '../components/Aside';
import Title from '../components/Title';
import IconStacks from '../components/IconStacks';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import data from '../utils/projectsList';
import LanguageProgress from '../components/LanguageProgress';
import { fetchLanguageProgress } from '../utils/fetchProjects';
import '../CSS/pages/projectDetails.css';

class ProjectsDetails extends Component {
  state = {
    loading: false,
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
    this.setState({ loading: false });
    this.setState({ keys, values });
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
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
      category,
    } = projectData[0];

    this.setState({
      name,
      projectName,
      gif,
      description,
      urlApication,
      urlGitHub,
      stacks,
      category,
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

    const {
      loading,
      keys,
      values,
      name,
      gif,
      description,
      urlApication,
      skills,
      category,
      stacks,
    } = this.state;

    if (loading) {
      return (
        <div className="container-datails">
          <Loading />
        </div>
      );
    }

    return (
      <div className="container-datails">
        <Title title={name} />
        <Aside history={history} />

        <div className="container-left">
          {category === 'front' && (
            <img src={gif} alt={`gif da aplicação ${name}`} />
          )}
          {category === 'back' && <IconStacks stacks={stacks} />}
          <span className="skills">{`Habilidades: ${skills}`}</span>
        </div>

        <div className="container-right">
          <p>{description}</p>
          <div className="div-buttons">
            <button onClick={this.handleOnClick} name="code">
              Ver Código
            </button>
            {urlApication !== '' && (
              <button onClick={this.handleOnClick} name="application">
                Ver Aplicação
              </button>
            )}
          </div>
          <div className="div-progress">
            {keys.map((key, index) => (
              <LanguageProgress tec={key} value={values[index]} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProjectsDetails;
