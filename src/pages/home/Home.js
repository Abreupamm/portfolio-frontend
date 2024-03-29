import { Component } from 'react';
import { BackgroundContainer, ProjectsContainer, Container } from './style';
import AboutMe from '../../components/about/AboutMe';
import ProjectsCard from '../../components/projectsCard/ProjectsCard';
import data from '../../utils/projectsList';
import Contact from '../../components/contact/Contacts';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

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
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    return (
      <>
        <BackgroundContainer>
          {/* <img
            alt=""
            src="https://www.informaticienadomicile.com/wp-content/uploads/2022/02/ecoles-codage-informatique.jpeg"
          /> */}
        </BackgroundContainer>
        <Header />
        <div>
          <AboutMe />
          <ProjectsContainer>
            <h2 id="projetos">Projetos</h2>
            <Container>
              {projectList.map((project) => (
                <ProjectsCard
                  history={ history }
                  key={ project.id }
                  data={ project }
                />
              ))}
            </Container>
            <button onClick={ this.handleClick }>{ buttonName }</button>
          </ProjectsContainer>
          <Contact />
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
