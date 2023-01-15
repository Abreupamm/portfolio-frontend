import { Component } from 'react';
import { BackgroundContainer } from './style';
import AboutMe from '../../components/about/AboutMe';
import ProjectsCard from '../../components/projectsCard/ProjectsCard';
import data from '../../utils/projectsList';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <BackgroundContainer>
          <img
            alt=""
            src="https://www.informaticienadomicile.com/wp-content/uploads/2022/02/ecoles-codage-informatique.jpeg"
          />
        </BackgroundContainer>
        <AboutMe />
        {data.map(
          (project) => <ProjectsCard history="" key={ project.id } data={ project } />,
        )}
      </div>
    );
  }
}

export default Home;
