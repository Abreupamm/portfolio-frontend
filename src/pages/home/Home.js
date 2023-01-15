import { Component } from 'react';
import { BackgroundContainer, ProjectsContainer, Container } from './style';
import AboutMe from '../../components/about/AboutMe';
import ProjectsCard from '../../components/projectsCard/ProjectsCard';
import data from '../../utils/projectsList';

class Home extends Component {
  state = {
    viewMore: false,
    projectList: [],
    buttonName: 'Ver mais',
  };

  componentDidMount() {
    this.setState({ projectList: data.filter((e) => e.visible) });
  }

  handleClick = () => {
    const { viewMore } = this.state;
    if (!viewMore) {
      this.setState({ projectList: data });
      this.setState({ buttonName: 'Ver menos' });
    } else {
      this.setState({ projectList: data.filter((e) => e.visible) });
      this.setState({ buttonName: 'Ver mais' });
    }

    const view = !viewMore;
    this.setState({ viewMore: view });
  };

  render() {
    const { projectList, buttonName } = this.state;
    return (
      <>
        <BackgroundContainer>
          <img
            alt=""
            src="https://www.informaticienadomicile.com/wp-content/uploads/2022/02/ecoles-codage-informatique.jpeg"
          />
        </BackgroundContainer>
        <div>
          <AboutMe />
          <ProjectsContainer>
            <h2>Projetos</h2>
            <Container>
              {projectList.map((project) => (
                <ProjectsCard key={ project.id } data={ project } />
              ))}
            </Container>
            <button onClick={ this.handleClick }>{ buttonName }</button>
          </ProjectsContainer>
        </div>
      </>
    );
  }
}

export default Home;
