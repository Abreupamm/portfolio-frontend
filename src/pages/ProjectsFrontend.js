import { Component } from 'react';
import Aside from '../components/Aside';
import Title from '../components/Title';
import ProjectsCard from '../components/ProjectsCard';
import data from '../utils/projectsList';
import Footer from '../components/Footer';
import '../CSS/pages/projectspage.css';
import Loading from '../components/Loading';

class ProjectsFrontend extends Component {
  state = { loading: true };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({loading: false})
    }, 1500);
  };
  
  render() {
    const { history } = this.props;
    const { loading } = this.state;
    
    if (loading) {
      return (
        <div className="container-datails">
          <Loading />
        </div>
      );
    }

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
        <Footer position=""/>
      </div>
    );
  }
}

export default ProjectsFrontend;
