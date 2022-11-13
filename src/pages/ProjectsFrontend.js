import { Component } from 'react';
import Aside from '../components/Aside';
import Title from '../components/Title';

class ProjectsFrontend extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Title title="PROJETOS FRONTEND" />
        <Aside history={history} position="left" />
      </div>
    );
  }
}

export default ProjectsFrontend;
