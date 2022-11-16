import { Component } from 'react';
import '../CSS/pages/projectspage.css';
import Aside from '../components/Aside';
import Title from '../components/Title';
import ProjectsCard from '../components/ProjectsCard';
import data from '../utils/projectsList';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

class ProjectsBackend extends Component {
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
      <div className="projects-back">
        <Title title="PROJETOS BACKEND" />
        <Aside history={history} />
        <div className="container-projects-cards">
          {data.map(
            (project) =>
              project.category === 'back' && <ProjectsCard history={history} data={project} />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProjectsBackend;
